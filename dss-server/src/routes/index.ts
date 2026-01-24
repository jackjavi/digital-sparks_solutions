import errorMiddleware from "../middlewares/errorMiddleware";
import bodyParser from "body-parser";
import cors from "cors";
import { Application } from "express";
import paymentRoutes from "./paymentRoutes";
import contactRoutes from "./contactRoutes";
import whopRoutes from "./whop/whopRoutes";
import ebookRoutes from "./ebook/ebookRoutes";

const appRoutes = (app: Application) => {
  // Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  // APP Routes
  app.use("/api/payment", paymentRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/whop", whopRoutes);
  app.use("/api/ebooks", ebookRoutes);

  // Error Handling Middleware
  app.use(errorMiddleware);

  // Catch-all route for undefined routes
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      error: {
        message: "Route not found",
        statusCode: 404,
      },
    });
  });
};

export default appRoutes;
