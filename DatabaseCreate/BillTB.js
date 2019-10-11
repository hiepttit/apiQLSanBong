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
  var sql = "CREATE TABLE Bill (MaKH int REFERENCES Customer (MaKH), MaNV int REFERENCES Staff (MaNV), MaPhong int REFERENCES Room (MaPhong), money float, Note nvarchar(255), primary key(MAKH,MaNV,MaPhong))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});