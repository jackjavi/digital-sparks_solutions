import mongoose from "mongoose";
import config from "../config";

// Connection options to handle timeouts and network issues
const connectionOptions = {
  serverSelectionTimeoutMS: 10000, // Timeout after 10s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  family: 4, // Use IPv4, skip trying IPv6 (fixes ENETUNREACH error)
  maxPoolSize: 10, // Maintain up to 10 socket connections
  minPoolSize: 2, // Maintain at least 2 socket connections
};

const connectDatabase = async (): Promise<void> => {
  try {
    // Validate MongoDB URI exists
    if (!config.mongoUri) {
      throw new Error(
        "MongoDB URI is not defined. Please check your environment variables."
      );
    }

    console.log("🔄 Connecting to MongoDB...");
    console.log(
      `📍 MongoDB Host: ${
        config.mongoUri.includes("mongodb+srv")
          ? "Atlas Cloud"
          : "Local/Self-hosted"
      }`
    );

    const conn = await mongoose.connect(config.mongoUri, connectionOptions);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(
      `🔌 Connection State: ${
        mongoose.connection.readyState === 1 ? "Connected" : "Unknown"
      }`
    );

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn(
        "⚠️  MongoDB disconnected. Mongoose will attempt to reconnect automatically."
      );
    });

    mongoose.connection.on("reconnected", () => {
      console.log("✅ MongoDB reconnected successfully");
    });

    mongoose.connection.on("connected", () => {
      console.log("🔗 Mongoose connected to MongoDB");
    });

    // Graceful shutdown
    const gracefulShutdown = async (signal: string) => {
      console.log(`\n⚠️  Received ${signal}. Closing MongoDB connection...`);
      try {
        await mongoose.connection.close();
        console.log("✅ MongoDB connection closed gracefully");
        process.exit(0);
      } catch (err) {
        console.error("❌ Error closing MongoDB connection:", err);
        process.exit(1);
      }
    };

    // Listen for termination signals
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:");

    if (error instanceof Error) {
      console.error(`   Message: ${error.message}`);

      // Provide helpful error messages based on error type
      if (error.message.includes("ETIMEDOUT")) {
        console.error("\n💡 Troubleshooting Tips:");
        console.error("   1. Check if MongoDB server is running");
        console.error("   2. Verify your MongoDB connection string");
        console.error("   3. Check firewall settings");
        console.error(
          "   4. For MongoDB Atlas: Whitelist your IP address in Network Access"
        );
        console.error("   5. Verify your network connection");
      } else if (error.message.includes("ENOTFOUND")) {
        console.error("\n💡 DNS Resolution Failed:");
        console.error("   1. Check your MongoDB hostname/URL");
        console.error("   2. Verify your internet connection");
        console.error("   3. Try using a different DNS server");
      } else if (error.message.includes("authentication failed")) {
        console.error("\n💡 Authentication Error:");
        console.error("   1. Check your MongoDB username");
        console.error("   2. Verify your MongoDB password");
        console.error("   3. Ensure the user has proper permissions");
      } else if (error.message.includes("ENETUNREACH")) {
        console.error("\n💡 Network Unreachable:");
        console.error("   1. Check if you're behind a firewall/proxy");
        console.error("   2. Try disabling IPv6 (already handled in code)");
        console.error("   3. Verify MongoDB Atlas IP whitelist");
      }
    }

    console.error("\n🔧 Current MongoDB URI format check:");
    console.error(
      `   Using: ${
        config.mongoUri ? config.mongoUri.substring(0, 20) + "..." : "UNDEFINED"
      }`
    );

    // Exit the process if we can't connect to the database
    process.exit(1);
  }
};

export default connectDatabase;
