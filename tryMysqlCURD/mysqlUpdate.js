const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

connection.connect();

const modSql = "update user set name=?,sex=?,age=?,tel=?,mail=?,note=? where id = ?";
const modSqlParams = ["及","woman",32,"345678","ndsajvn@qq.com","adsvfadsv",2];

connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('UPDATE success',result.affectedRows);
});
connection.end();