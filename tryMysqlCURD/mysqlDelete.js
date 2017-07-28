const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

connection.connect();

const delSql = 'delete from user where id = "4"';
connection.query(delSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }
    console.log('DELETE success',result.affectedRows);
});
connection.end();