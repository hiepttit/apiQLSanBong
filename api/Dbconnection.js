var mysql=require('mysql');
var connection=mysql.createConnection({
    host: "remotemysql.com",
    user: "SdZvIjNHHX",
    password: "hOndPDyaMK",
    database: "SdZvIjNHHX"
});
module.exports=connection;