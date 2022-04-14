// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE kalu", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });



// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE devi", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });



var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mylb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});