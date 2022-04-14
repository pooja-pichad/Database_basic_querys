// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE database1", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });





// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "database1"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });



// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "database1"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });

var mysql=require("mysql");
var con=mysql.createConnection({
  host:"loacal host",
  user:"root",
  password:"Pooja@123"
})
con.connect (function(err){
  if(err) throw err;
  console.log("connected")
  con.query("CREATE DATABASE mylb",function(err,result){
    if (err) throw err;
    console.log("database created")
  })
})

var mysql=require("mysql");
var con=mysql.createConnection({
  host:"loacal host",
  user:"root",
  password:"Pooja@123",
  database:"mylb"

})
con.connect(function(err){
  if(err) throw err;
  console.log("connected")
  
  var sql="CARETE TABLE customers name(VACHER(12), adrees VACHER(89))"
  con.query(sql,function(err,result){
    if (err) throw err;
    console.log("table created")
  })
})


var mysql=require("mysql");
var con=mysql.createConnection({
  host:"loacal host",
  user:"root",
  password:"Pooja@123",
  database:"mylb"
})
con.connect(function(err){
  if (err) throw err;
  console.log("connected")
  var sql="CRAETE TABLE customers name(pooja(12) , surname pichad(23)) "
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("table created")
  })
})

var mysql =require("mysql")
var con= mysql.createConnection({
  host:"loacalhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"

})
con.connect(function(err){
  if(err) throw err;
  console.log("connected")
  var sql="INSERT INTO customers name (pooja ,surname pooja), values(ppppp)";
  con.query(sql,function(err,result){
    if (err) throw err;
    console.log("insetrd")
  })
})


var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"
})
con.connect(function(err){
  if (err) throw err;
  console.log("connected")
  var sql="DROP TABLE customers ";
  con.query(sql,function(err,result){
    if (err) throw err;
    console.log("drop tables")
  })
})

var mysql=require("mysql");
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"
})
con.connect(function(err){
  if(err) throw err;
  con.query("SELECT name adress FROM customers ",function(err,result){
    if (err) throw err;
    console.log(fileds)
  })
})



var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"

})
con.connect(function(err){
  if(err) throw err;
  con.query("SELECT *FROM  customers  ORDER BY name DESC",function(err,result){
    if (err) throw err;
    console.log(result)
  })
})

var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"
})
con.connect(function(err){
  if(err) throw err;
  var sql="UPDATE customers SET name = 'pooja' WHERE name = 'peter'"
  con.query(sql,function(err,result){
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated")
  })
})
var mysql=require("mysql")
var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Pooja@123",
  database:"mylb"
})
con.connect(function(err){
  if (err) throw err;
  var sql="drop table customers"
  con.query(sql,function(err,result){
    if(err) throw err;
    console.log("table deleted")

  })

})