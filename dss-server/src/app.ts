import express, { Application } from "express";
import appRoutes from "./routes/index";
import config from "./config/index";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app: Application = express();
const PORT = config.port;

// create a http server
const server = http.createServer(app);

// Serve the uploads directory
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// App Routes
appRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { server };
