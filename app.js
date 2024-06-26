//Chemins vers la BDD et le fichier de configuration
//vers mysql2
const mysql2 = require("mysql2");
//vers dotenv
const dotenv = require("dotenv");
// importation de la library express
const express = require("express");
// const userRouter = require("./routes/userRoutes");

dotenv.config({ path: "./config.env" });

//  is used to create an instance of an Express application
const app = express();

//Objet pour configurer la connexion du serveur à la BDD
let connection = mysql2.createConnection({
  host: process.env.HOST,
  port: process.env.PORT_DB,
  user: process.env.USERNAME_DB,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

//Connexion à la BDD
connection.connect((err) => {
  //   console.log(process.env);
  if (err) return console.error(err.message);

  console.log("Connected to the MySQL server.");
});

// app.use("/api/v1/users", userRouter);

//
const port = process.env.PORT_SERVER || 8090;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
