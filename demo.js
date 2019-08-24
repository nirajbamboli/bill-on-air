var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "niraj1234",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //Insert a record in the "customers" table:
    var sql = "INSERT INTO products (product_id,product_name,product_quantity,product_price) VALUES ('3','asdsa', '3','3')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

//var sql = "CREATE DATABASE mydb"
// var sql = "INSERT INTO products (product_id,product_name,product_quantity,product_price) VALUES ('3','asdsa', '3','3')";
// var sql = "CREATE TABLE products (product_id VARCHAR(20),product_name VARCHAR(60),product_quantity VARCHAR(20),product_price VARCHAR(20))";