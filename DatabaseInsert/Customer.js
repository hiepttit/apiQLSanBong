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
  var sql = "INSERT INTO Customer (MaKH, name, CMND, GioiTinh, CreatAt, EndAt, evaluate, MaPhong) VALUES ?";
  var values = [
    [1,'Nguyễn Văn Tèo', 1236897, 'Nam','2019-03-22','2019-03-23','tốt',1],
    [2,'Bùi Thị Viên', 1235297, 'Nữ','2018-04-21','2018-04-22','tạm',3],
    [3,'Trần Thanh', 5836897, 'Nữ','2019-08-25','2019-08-26','tốt',5],
    [4,'Nguyễn Văn B', 1976897, 'Nam','2018-06-12','2018-06-14','chưa tốt',6],
    [5,'Lê Thị Tám', 1369897, 'Nữ','2019-08-06','2019-08-09','tốt',7],
    [6,'Đỗ Thành Danh', 25836897, 'Nam','2019-03-15','2019-03-17','tốt',4],
    [7,'Đinh Quang Khải', 5836897, 'Nam','2018-04-12','2018-04-15','tạm',2],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});