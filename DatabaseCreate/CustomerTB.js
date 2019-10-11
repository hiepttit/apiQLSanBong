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
  var sql = "CREATE TABLE Customer (MaKH int, name NVARCHAR(255), CMND int, GioiTinh NVARCHAR(10), CreatAt datetime, EndAt datetime, evaluate NVARCHAR(255), MaPhong int,primary key(MaPhong), FOREIGN KEY (MaPhong) REFERENCES Room (MaPhong))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});