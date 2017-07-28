const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

connection.connect();

const addSql = 'insert user (id,name,sex,age,tel,mail,note) values(?,?,?,?,?,?,?)';
const addSqlParams = [null,"孙","man",13,"1234567","234567@qq.com","fghavi"];

connection.query(addSql,addSqlParams,function (err,result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('INSERT ID:',result);
});

connection.end();