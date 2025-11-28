import express, { Application } from "express";
import appRoutes from "./routes/index";
import config from "./config/index";
import http from "http";
import connectDatabase from "./utils/database";

const app: Application = express();
const PORT = config.port;

// Create HTTP server
const server = http.createServer(app);

// Flag to track if database is required for the app to run
const DB_REQUIRED = true; // Set to false if you want server to start without DB

// Start function to initialize database and server
const start = async () => {
  console.log("🚀 Starting Digital Sparks Solutions Server...");
  console.log(`📡 Environment: ${config.nodeEnv || "development"}`);
  console.log(`🔌 Port: ${PORT}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  try {
    // Attempt to connect to database
    await connectDatabase();
    console.log("\n✅ Database connected successfully");

    // Initialize app routes after successful DB connection
    appRoutes(app);

    // Start the server
    server.listen(PORT, () => {
      console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`✅ Server running successfully`);
      console.log(`🌐 Local: http://localhost:${PORT}`);
      console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      console.log("📝 Available endpoints:");
      console.log(`   POST /api/payment/confirm`);
      console.log(`   POST /api/contact/submit`);
      console.log(`   POST /api/whop/payment-succeeded`);
      console.log(`   GET  /api/whop/health\n`);
    });
  } catch (error) {
    console.error("\n❌ Failed to start application:", error);

    if (DB_REQUIRED) {
      console.error("\n🛑 Database connection is required. Exiting...");
      process.exit(1);
    } else {
      console.warn(
        "\n⚠️  Starting server without database connection (DB_REQUIRED=false)"
      );

      // Initialize app routes even without DB
      appRoutes(app);

      // Start the server anyway
      server.listen(PORT, () => {
        console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(`⚠️  Server running WITHOUT database`);
        console.log(`🌐 Local: http://localhost:${PORT}`);
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      });
    }
  }
};

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("💥 UNCAUGHT EXCEPTION! Shutting down...");
  console.error(error.name, error.message);
  console.error(error.stack);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("💥 UNHANDLED REJECTION! Shutting down...");
  console.error("Reason:", reason);
  console.error("Promise:", promise);

  // Close server gracefully
  server.close(() => {
    process.exit(1);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error("⚠️  Forced shutdown after timeout");
    process.exit(1);
  }, 10000);
});

// Start the application
start();

export { server };
