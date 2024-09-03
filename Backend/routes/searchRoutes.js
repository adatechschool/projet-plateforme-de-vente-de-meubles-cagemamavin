"use strict";
const express = require("express");
const router = express.Router();
const connection = require("./../db.js");

// Middleware to handle errors
const handleErrors = (err, res) => {
    console.error("Error fetching data:", err);
    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
};

const getFurnituresByType = (req, res) => {
    const type = req.params.type;
    console.log(`Fetching furnitures for type: ${type}`);
    connection.query("SELECT f.name AS furniture_name FROM furnitures as INNER JOIN categories AS c ON f.category_id = c.id WHERE c.type = ?", [type], (err, rows) => {
        if (err) return handleErrors(err, res);

        if (rows.length === 0) {
            return res.status(404).json({
                status: "fail",
                message: `No furniture found with type ${type}`,
            });
        }
        console.log(`Furnitures for category_id ${type}:`);
        console.log(rows);

        res.status(200).json({
            status: "success",
            data: {
                furnitures: rows,
            },
        });
    });
};
router.route("/:type").get(getFurnituresByType);

module.exports = router;