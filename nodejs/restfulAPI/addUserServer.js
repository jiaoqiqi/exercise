const express = require('express');
const app = express();
const fs = require('fs');

const user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
};

app.get(__dirname + "/" + "users.json", "utf-8", (err, data)  => {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
});

const server = app.listen("8081",()=>{
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

} );