const orm = require("../config/orm.js");

const burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },


  insertOne: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(result) {
      callback(result);
    });
  },

  updateOne: function(objColVals, burgerID, callback) {
    orm.update("burgers", objColVals, burgerID, function(res) {
      callback(res);
    });
  },
};

module.exports = burger;