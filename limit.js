// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "gayu"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });




var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "mylb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
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
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
