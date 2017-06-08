const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;

    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end()
    });
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
