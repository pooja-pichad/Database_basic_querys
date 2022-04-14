var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pooja@123",
    database:"login2"

})
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
//     con.query("CREATE DATABASE login2",function(err,result){
//         if (err) throw err;
//         console.log("databsed careted");

//     })

// })
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE Persons (ID INT NOT NULL, PRIMARY KEY , AUTO_INCREMENT,Username VARCHAR(255) NOT NULL, Password VARCHAR(255) )";
    // varchar is have specified length 1 to 255 is used for string 
    con.query(sql, function (err, result) {
      if (err){
        console.log(err); 
      }
      else{
        console.log("Table  created");
      }
    });
  });
  

  
// const request=require("readline-sync")
// var user=request.question("enter a signup or login")
// if (user=="signup"){
//   var username = request.question("enter a username :");
//   var password = request.question("enter a password :");
//   var email= request.question("enter a your email :");
//   con.connect(function(err){
//     if(err) throw err;
//       console.log("conneted")
//       var sql = "INSERT INTO  (UserName,Password,Email,Entry) VALUES ? " //( fname , lname , mobile , username , password  );
//       var values=[ [username , password ,email,entry] ]
//       con.query(sql,[values] ,function(err, result) {
//         // if (err) throw err;
//         if (err) {
//            console.log(err)

//         }
//         else{
//            console.log("data inserted")
//          }
//         })
      
//       });
// }
// else{
//     if(user == "login"){

//     var password = request.question("enter your password :");
//     var email= request.question("enter your email :");
//     var entry=request.questionInt("enter a entry ")
//     var Password=password;
//     var Email=email
//     var Entry=entry
//     // var Entry={UserName:"username",Password:"password",Email:"email",Entry:"entry"}
//     var sql="SELECT  *FROM deatils WHERE Password = ? and Email=? OR Entry=?";               
//     con.query(sql,[Password,Email,Entry], function(err, results,fields){     
//       if(err) {
//         console.log(err);
//         }
//         else{

//             console.log("login successfully")
//         }
                  
//        });
      
    
       
//     }}
            