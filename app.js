const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
let connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);
  console.log("Connected to the MySQL server.");
});
