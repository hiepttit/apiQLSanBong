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
  var sql = "INSERT INTO User (ID, UserName, password, role) VALUES ?";
  var values = [
    [1,'Admin', '123456','Admin'],
    [2,'TranHiep', '123456','Admin'],
    [3,'TinhPhan', '123456','Admin'],
    [4,'DuyBang', '123456','Reception'],
    [5,'LamIphone', '123456','Reception'],
    [6,'MenLy', '123456','Housekeeping'],
    [7,'Quoc', '123456','Housekeeping'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});