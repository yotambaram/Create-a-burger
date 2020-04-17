const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();


router.get("/burgers", function(req, res) {
    burger.all(function(result) {
      let dataObj = {
        burgers: result
      };
      res.render("index", dataObj);
    });
  });

router.post('/burgers', function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, 0], 
        function (result) {
            res.json({id: result.burger_name});
        });
});


router.put('api/burger/:id', function (req, res) {
    let burgerID = req.params.id
    burger.updateOne({devoured: req.body.devoured}, burgerID, function(result){
        console.log(result.changedRows);
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
})

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows === 0) {
      console.log(result);
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });

  module.exports = router;