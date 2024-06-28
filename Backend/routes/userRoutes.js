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

  connection.query("SELECT * FROM users;", (error, results, fields) => {
    console;
    if (error) {
      console.error("Error retrieving users:", error);
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: {
        users: results,
      },
    });
  });
  // const [rows] = await connection.promise().query("SELECT * FROM users; ");
  // console.log(req.query);
  // console.log(rows);

  // // EXECUTE QUERY
  // // so here we are creating an object

  // // SEND RESPONSE
  // // const users = "Hello World";
  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     users: rows, // if the key and the value have the same value we dont need to specify both just one
  //   },
  // });
};
router.route("/").get(getAllUsers);
// .post(createUser);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
