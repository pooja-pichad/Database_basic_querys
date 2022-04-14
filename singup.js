
var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pooja@123",
    database:"login_page"

})
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected")
//     con.query("CREATE DATABASE login_page",function(err,result){
//         if (err) throw err;
//         console.log("databsed careted");

//     })

// })
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE deatils (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255) , email VARCHAR(255) )";// varchar is have specified length 1 to 255 is used for string 
//     con.query(sql, function (err, result) {
//       if (err){
//         console.log(err); 
//       }
//       else{
//         console.log("Table  created");
//       }
//     });
//   });
  
const request=require("readline-sync")
var user=request.question("enter a signup or login : ")
if (user=="signup"){
  var username = request.question("enter a username :");
  var password = request.question("enter a password :");
  var email= request.question("enter a your email :");
  con.connect(function(err){
    if(err) throw err;
      console.log("conneted")
      var sql = "INSERT INTO deatils (UserName,Password,Email) VALUES ? " //
      var values=[ [username , password ,email] ]
      con.query(sql,[values] ,function(err, result) {
        // if (err) throw err;
        if (err) {
           console.log(err)

        }
        else{
           console.log("data inserted")
         }
        })
      
      });
}
else{
    if(user == "login"){

    var password = request.question("enter your password :");
    var email= request.question("enter your email :");
    var sql="SELECT*FROM deatils "; 
    // v1=password
    // v2=email              
    con.query(sql, function(err, results,fields){     
      if(err) {
        console.log(err);
        }
        else{
            // console.log(results)
            var found=results.find(function(user){     ///find function use for find elements of arry
                if (user.password==password && user.email==email ){

                    return user
                }
            })
            if (found){

            console.log("login successfully")
            console.log(found)
            }else{
                console.log('User not found')
            }
        }
                  
       });
      
    
       }
       else{
         console.log("create account ")
       }
  }
            