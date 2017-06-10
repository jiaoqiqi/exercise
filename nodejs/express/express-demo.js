const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello GET");
});

app.get('/', (req, res) => {
    res.send("hello POST");
});

app.get('/del_user', (req, res) => {
    res.send("delete page");
});

app.get('/list_user', (req, res) => {
    res.send('list page');
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});