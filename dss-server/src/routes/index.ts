import errorMiddleware from "../middlewares/errorMiddleware";
import bodyParser from "body-parser";
import cors from "cors";
import { Application } from "express";
import paymentRoutes from "./paymentRoutes";
import contactRoutes from "./contactRoutes";

const appRoutes = (app: Application) => {
  // Middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  // APP Routes
  app.use("/api/payment", paymentRoutes);
  app.use("/api/contact", contactRoutes);

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
