var express = require('express');
var app = express();

app.use(express.static('./')); //访问当前目录下的静态文件。默认访问index.html

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
