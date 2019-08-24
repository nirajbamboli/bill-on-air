function ADD() {
    var a = document.getElementById("ID").value;
    var b = document.getElementById("Name").value;
    var c = document.getElementById("Quantity").value;
    var d = document.getElementById("Price").value;
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
        var sql = "INSERT INTO products (product_id,product_name,product_quantity,product_price) VALUES (a,b,c,d)";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
}