var mysql=require('mysql');
var connection=mysql.createConnection({
    host: "remotemysql.com",
    user: "SdZvIjNHHX",
    password: "pJFWEotgwC",
    database: "SdZvIjNHHX"
});
module.exports=connection;