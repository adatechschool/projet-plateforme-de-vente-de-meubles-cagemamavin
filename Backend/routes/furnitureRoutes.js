"use strict";
const express = require("express");
const router = express.Router();
// const mysql2 = require("mysql2/promise");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
const connection = require("./../db.js");

// Middleware to handle errors
const handleErrors = (err, res) => {
  console.error("Error fetching data:", err);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

const getAllfurnitures = (req, res, next) => {
  connection.query("SELECT * FROM furnitures", (err, rows) => {
    if (err) return handleErrors(err, res);

    console.log("Categories data:");
    console.log(rows);

    res.status(200).json({
      status: "success",
      data: {
        furnitures: rows,
      },
    });
  });
};

const getAllCouches = (req, res, next) => {
  console.log("Fetching all couches (canapés)");
  connection.query("SELECT * FROM furnitures WHERE category_id = 1", (err, rows) => {
    if (err) return handleErrors(err, res);


    res.status(200).json({
      status: "success",
      data: {
        furnitures: rows,
      },
    });
  });
};

const getAllChairs = (req, res, next) => {
  connection.query("SELECT * FROM furnitures WHERE category_id = 2", (err, rows) => {
    if (err) return handleErrors(err, res);

    console.log("Chairs data:");
    console.log(rows);

    res.status(200).json({
      status: "success",
      data: {
        furnitures: rows,
      },
    });
  });
};

const getAllTables = (req, res, next) => {
  connection.query("SELECT * FROM furnitures WHERE category_id = 3", (err, rows) => {
    if (err) return handleErrors(err, res);

    res.status(200).json({
      status: "success",
      data: {
        furnitures: rows,
      },
    });
  });
};

// Function to get furniture by name
const getFurnitureById = (req, res, next) => {
  const id = req.params.id;
  connection.query("SELECT * FROM furnitures WHERE id = ?", [id], (err, rows) => {
    console.log("Canape data:", rows[0]);
    if (err) return handleErrors(err, res);

    if (rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `No furniture found with id ${id}`,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        furniture: rows[0], // Return the first (and only) canape found
      },
    });
  });
}

const createFurniture = (req, res, next) => {
  const { name, description, price, length, width, height, category_id, image,quantity } =
    req.body;

  if (!name || !price) {
    return res.status(400).json({
      status: "fail",
      message: "Name and price are required fields.",
    });
  }

  const query = `INSERT INTO furnitures (name, description, price, length, width, height, category_id, image,quantity) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(
    query,
    [name, description, price, length, width, height, category_id, image,quantity],
    (err, results) => {
      if (err) return handleErrors(err, res);

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
          quantity,
          image,
        },
      });
    }
  );
};

router.route("/").get(getAllfurnitures).post(createFurniture);
router.route("/catalogue").get(getAllfurnitures);
router.route("/canapes").get(getAllCouches);
router.route("/chaises").get(getAllChairs);
router.route("/tables").get(getAllTables);
router.route("/:id").get(getFurnitureById);

// router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;