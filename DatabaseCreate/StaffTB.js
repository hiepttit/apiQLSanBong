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
  var sql = "CREATE TABLE Staff (MaNV int primary key, HoTen nvarchar(255), NgaySinh Datetime, DiaChi nvarchar(255), SDT int, Luong float)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});