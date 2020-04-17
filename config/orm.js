const connection = require("../config/connection.js");

//selectAll()
//insertOne()
//updateOne()

const orm = {
    selectAll: function(table, callback) {
    const query = `SELECT * FROM ${table};`
    connection.query(query, function(err, result) {
      if (err) {
        console.log(err);
      }        
      callback(result);
    });
  },

  insertOne: function(table, col, val, callback) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  

  updateOne: function(table, col, burgerID, callback) {
    const query = `UPDATE ${table} SET ${objToSql(col)} WHERE id = ${burgerID}`
  }}

  


module.exports = orm;





