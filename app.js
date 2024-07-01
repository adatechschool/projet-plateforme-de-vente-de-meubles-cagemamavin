const express = require("express");
// const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const router = express.Router();
// chemin de routes vers les dossiers "locaux"
const userRoutes = require("./Backend/routes/userRoutes");
const furnitureRoutes = require("./Backend/routes/furnitureRoutes");
const authRoutes = require("./Backend/routes/authRoutes");

const app = express();
app.use(express.json());
//middleware function provided by the Express framework. It is used to parse incoming request bodies in JSON format

// Middleware to log request headers and add requestTime property
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

app.use("/api/v1/users", userRoutes); // Mount the router under /api/v1/users

app.use("/api/v1/furnitures", furnitureRoutes);
app.use("/api/v1/auth", authRoutes); // Mount the auth router under /api/v1/auth

const port = process.env.PORT_SERVER || 8090;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
