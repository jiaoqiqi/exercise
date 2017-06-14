const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extend: false}));
app.use(multer({dest : '/tmp/'}).array('image'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/file_upload', (req, res) => {
    console.log(req.files[0]);
    const dest_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(dest_file, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                response = {
                    message: 'File uploaded successful',
                    filename: req.files[0].originalname
                }
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
});

const server = app.listen(8081, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});