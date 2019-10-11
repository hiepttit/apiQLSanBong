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
  var sql = "INSERT INTO Room (MaPhong, name, detail, log) VALUES ?";
  var values = [
    [1,'Phòng 1', '',''],
    [2,'Phòng 2', '',''],
    [3,'Phòng 3', '',''],
    [4,'Phòng 4', '',''],
    [5,'Phòng 5', '',''],
    [6,'Phòng 6', '',''],
    [7,'Phòng 7', '',''],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});