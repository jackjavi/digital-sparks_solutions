import mongoose from "mongoose";
import config from "../config";

interface RetryOptions {
  maxRetries?: number;
  retryDelay?: number;
  backoffMultiplier?: number;
}

const connectDatabase = async (options: RetryOptions = {}): Promise<void> => {
  const {
    maxRetries = 5,
    retryDelay = 5000,
    backoffMultiplier = 1.5,
  } = options;

  let retryCount = 0;
  let currentDelay = retryDelay;

  const attemptConnection = async (): Promise<void> => {
    try {
      const conn = await mongoose.connect(config.mongoUri, {
        serverSelectionTimeoutMS: 5000, // Fail fast on each attempt
      });

      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      console.log(`📊 Database: ${conn.connection.name}`);

      // Setup connection event handlers after successful connection
      setupConnectionHandlers();
    } catch (error) {
      retryCount++;

      if (retryCount <= maxRetries) {
        console.warn(
          `⚠️  MongoDB connection attempt ${retryCount}/${maxRetries} failed. ` +
            `Retrying in ${currentDelay / 1000}s...`
        );
        console.error(
          `Error: ${error instanceof Error ? error.message : error}`
        );

        await new Promise((resolve) => setTimeout(resolve, currentDelay));
        currentDelay *= backoffMultiplier; // Exponential backoff

        return attemptConnection();
      } else {
        console.error(
          `❌ Failed to connect to MongoDB after ${maxRetries} attempts`
        );
        console.error("Error:", error);
        process.exit(1);
      }
    }
  };

  await attemptConnection();
};

const setupConnectionHandlers = (): void => {
  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn(
      "⚠️  MongoDB disconnected. Mongoose will attempt to reconnect..."
    );
  });

  mongoose.connection.on("reconnected", () => {
    console.log("✅ MongoDB reconnected");
  });

  // Graceful shutdown
  const gracefulShutdown = async (signal: string) => {
    console.log(`\n${signal} received. Closing MongoDB connection...`);
    try {
      await mongoose.connection.close();
      console.log("MongoDB connection closed gracefully");
      process.exit(0);
    } catch (err) {
      console.error("Error closing MongoDB connection:", err);
      process.exit(1);
    }
  };

  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
};

export default connectDatabase;
