"use strict";
const express = require("express");
// const app = require("./../../app.js");
const connection = require("./../../app.js");
const router = express.Router();

// app.post("/api/users", function (req, res) {
//   // const user_id = req.query.id;
//   // const token = req.query.token;
//   // const geo = req.query.geo;

//   res.status(200).json({
//     status: "success",
//     data: {
//       tour2, // if the key and the value have the same value we dont need to specify both just one
//     },
//   });
// });

const getAllUsers = (req, res, next) => {
  // BUILD QUERY

  connection.query("SELECT * FROM categories", (err, rows) => {
    if (err) {
      console.error("Error fetching categories data:", err.message);
      process.exit(1);
    }

    console.log("Categories data:");
    console.log(rows); // Affiche les données de la table categories
  });
};
router.route("/").get(getAllUsers);
// .post(createUser);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
