const express = require("express");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();
const router = express.Router();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  port: process.env.PORT_DB,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);
  console.log("Connected to the MySQL server.");
});

// Middleware to log request headers and add requestTime property
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

const getAllUsers = (req, res, next) => {
  connection.query("SELECT * FROM categories", (err, rows) => {
    if (err) {
      console.error("Error fetching categories data:", err.message);
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }

    console.log("Categories data:");
    console.log(rows);

    res.status(200).json({
      status: "success",
      data: {
        categories: rows,
      },
    });
  });
};

router.route("/").get(getAllUsers);
app.use("/api/v1/users", router); // Mount the router under /api/v1/users

const port = process.env.PORT_SERVER || 8090;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
