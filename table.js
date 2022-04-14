// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "devi"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mylb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";// varchar is have specified length 1 to 255 is used for string 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
