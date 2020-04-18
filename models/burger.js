const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insert("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, id, cb) {
    orm.update("burgers", objColVals, id, function(res) {
      cb(res);
    });
  }
  
};

module.exports = burger;