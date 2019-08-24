function Time() {

    let mysql = require('mysql');
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'niraj1234',
        database: 'mydb'
    });
    connection.connect(function(err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    let sql = `SELECT * FROM products`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
        var table = document.getElementById("dataTable");
        //or use :  var table = document.all.tableid;
        for (var i = table.rows.length - 1; i > 0; i--) {
            table.deleteRow(i);
        }
        results.forEach(element => {
            console.log(element)
            var name = element.product_name;
            var id = element.product_id;
            var quantity = element.product_quantity;
            var price = element.product_price;
            var five = element.product_name;
            var six = element.product_name;
            // console.log(hold)
            // console.log(typeof hold)

            // var table = document.getElementById("dataTable");
            var row = table.insertRow(1);
            var cellname = row.insertCell(0);
            var cellid = row.insertCell(1);
            var cellquantity = row.insertCell(2);
            var cellprice = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            cellname.innerHTML = name;
            cellid.innerHTML = id;
            cellquantity.innerHTML = quantity;
            cellprice.innerHTML = price;
            cell5.innerHTML = five;
            cell6.innerHTML = six;

        });
    });



    connection.end();


    setTimeout(Time, 1000)

}