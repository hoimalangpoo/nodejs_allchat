const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"nodejs_project"
  });
  
 con.connect(function(err) {
    if (err){
        console.log(err);
    }else{
        console.log("Connected!");
       
    }

});

module.exports = con