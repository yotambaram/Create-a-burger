const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");



router.get("/", function(req, res) {
  burger.all(function(result) {
    const hbsObject = {
      burgers: result
    };
    res.render("index", hbsObject);
  });
});


router.get("/burgers", function(req, res) {
  burger.all(function(result) {
    const hbsObject = {
      burgers: result
    };
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});



router.put("/api/burgers/:id", function(req, res) {
  const condition = req.params.id; // 3
  console.log("condition", condition);
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    console.log(result.changedRows)
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;


