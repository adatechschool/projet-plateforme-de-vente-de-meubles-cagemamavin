const mysql2 = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

let connection = mysql2.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  //   console.log(process.env);
  if (err) return console.error(err.message);

  console.log("Connected to the MySQL server.");
});
