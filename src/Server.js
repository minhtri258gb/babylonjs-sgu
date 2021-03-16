
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + "/../"));

server.listen(8080, 'localhost', function () {
    var host = server.address().address
    var port = server.address().port
    console.log("\nServer running http://%s:%s", host, port)
});
