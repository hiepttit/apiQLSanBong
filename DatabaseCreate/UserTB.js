var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "QLHomeStay"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE User (ID int, name NVARCHAR(255), password NVARCHAR(255), role NVARCHAR(255), primary key(ID))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});