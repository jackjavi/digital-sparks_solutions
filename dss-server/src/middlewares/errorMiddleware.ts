import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/customError";
import config from "../config/index";

function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("ERROR:", err);
  const isDev = config.nodeEnv === "development";

  // Handle CustomError
  if (err instanceof CustomError) {
    const { status: statusCode, message } = err;
    console.error("Custom Error:", message);
    return res.status(statusCode).json({
      success: false,
      error: {
        message,
        statusCode,
        ...(isDev && { stack: err.stack }),
      },
    });
  }

  // Handle other errors
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  if (statusCode >= 500) {
    console.error("Unhandled Error:", err);
  }

  // Respond with error details
  return res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
      ...(isDev && { stack: err.stack }),
    },
  });
}

// Catch-all for unhandled errors
errorMiddleware.catchAll = (err: any, req: Request, res: Response) => {
  const isDev = config.nodeEnv === "development";
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error("Unhandled Error:", err);

  // Respond with error details
  return res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
      ...(isDev && { stack: err.stack }),
    },
  });
};

export default errorMiddleware;
