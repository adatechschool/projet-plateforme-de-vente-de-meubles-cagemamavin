"use strict";
const express = require("express");
// const app = require("./../../app.js");
const router = express.Router();

const connection = require("./../../db.js");

const getAllUsers = (req, res, next) => {
  connection.query("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.error("Error fetching categories data:", err.message);
      return res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
    }

    console.log("Users data:");
    console.log(rows);

    res.status(200).json({
      status: "success",
      data: {
        users: rows, // Affiche les données de la table categories
      },
    });
  });
};

router.route("/").get(getAllUsers);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
