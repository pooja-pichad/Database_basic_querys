//****** connection*****


var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",

// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
    
// })


//****CRAETE DATABASE */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123"
});

con.connect(function(err) {
  if (err) {    
  console.log(" notConnected!");
  }else{
      console.log(" connect")
  }
  con.query("CREATE DATABASE curd_opeartion", function (err, result) {
    if (err) {
    console.log(" not Database created");
    }
    else{
        console.log("creted")

    }
  });
});



//*******CREATE TABLE******
// var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pooja@123",
    database:"curd_opeartion"
})
con.connect(function(err){
    if (err) {
    console.log(" notconnected")
    }else{
        console.log("connected")
    }
    var sql="CREATE TABLE schooldata (name VARCHAR(255), address VARCHAR(255))"
    con.query(sql,function(err,result){
        if (err) {
        console.log(" not table created")
        }
        else{
            console.log("creted succussfully")
        }
    })
})



//*****INSERT INTO */

// var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",
//     database:"curd_opeartion"
// })
con.connect(function(err){
    if(err){
    console.log(" not connected")
    }else{
        console.log("connected")
    }
    var sql="INSERT INTO schooldata (name, address) VALUES ('pooja', 'pichad 24')"
    con.query(sql,function(err,result){
        if(err){
        console.log(" not inserted successfully")
        }
        else{
            console.log("insetred succussfully")
        }
    })
})


//****SELECT FROM */

// var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",
//     database:"curd_opeartion"
// })
// con.connect(function(err){
//     if (err) throw err;
//     console.log("connected")
//     con.query("SELECT name ,address FROM schooldata",function(err,result,fileds){
//         if(err) throw err;
//         console.log(fileds)
//     })
// })


///****SELECT*FROM WHERE */

// var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",
//     database:"curd_opeartion"
// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
//     con.query("SELECT *FROM   schooldata WHERE address = 'pichad 24'",function(err,result){
//         if(err) throw err;
//         console.log(result)
//     })
// })


//***UPDATE SET WHERE */

// var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",
//     database:"curd_opeartion"
// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
//     var sql="UPDATE schooldata SET name = 'guddu' WHERE name = 'pooja'"
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log(result.affectedRows + " record(s) updated")
//     })
// })

//***ORDER BY */

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "curd_opeartion"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM schooldata ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


//***DELETE FROM WHERE  */
// var mysql=require("mysql")
// var con=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Pooja@123",
//     database:"curd_opeartion"
// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
//     var sql = "DELETE FROM schooldata WHERE address = 'pichad 24'";
//     con.query(sql,function(err,result){
//         if (err) throw err;
//         console.log("Number of records deleted: " + result.affectedRows);

//     })
// })


//****DROP TABLE  */
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123",
//   database: "curd_opeartion"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE schooldata";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });




