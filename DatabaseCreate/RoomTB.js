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
  var sql = "CREATE TABLE Room (MaPhong int, name NVARCHAR(255), detail NVARCHAR(255), log NVARCHAR(1000), primary key(MaPhong))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});