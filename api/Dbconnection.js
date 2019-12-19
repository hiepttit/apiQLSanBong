var mysql=require('mysql');
var connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "our_team"
});
module.exports=connection;