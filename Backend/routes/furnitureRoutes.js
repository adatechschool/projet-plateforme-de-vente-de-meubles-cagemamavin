"use strict";
const express = require("express");
// const app = require("./../../app.js");
const router = express.Router();

const connection = require("./../db.js");

// const getAllcategories = (req, res, next) => {
//   connection.query("SELECT * FROM categories", (err, rows) => {
//     if (err) {
//       console.error("Error fetching categories data:", err.message);
//       return res.status(500).json({
//         status: "error",
//         message: "Internal server error",
//       });
//     }

//     console.log("Categories data:");
//     console.log(rows);

//     res.status(200).json({
//       status: "success",
//       data: {
//         categories: rows,
//       },
//     });
//   });
// };

const getAllfurnitures = (req, res, next) => {
  connection.query("SELECT * FROM furnitures", (err, rows) => {
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

const createFurniture = (req, res, next) => {
  const { name, description, price, length, width, height, category_id } =
    req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: "fail",
      message: "Name and price are required fields.",
    });
  }

  const query = `INSERT INTO furnitures (name, description, price, length, width, height, category_id) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

  connection.query(
    query,
    [name, description, price, length, width, height, category_id],
    (err, results) => {
      if (err) {
        console.error("Error inserting new furniture:", err.message);
        return res.status(500).json({
          status: "error",
          message: "Internal server error",
        });
      }

      res.status(201).json({
        status: "success",
        data: {
          id: results.insertId,
          name,
          description,
          price,
          length,
          width,
          height,
          category_id,
        },
      });
    }
  );
};

router.route("/").get(getAllfurnitures).post(createFurniture);
router.route("/categories").get(getAllfurnitures);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
//
