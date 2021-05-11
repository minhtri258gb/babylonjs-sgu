
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../"));

app.get('/', function (req, res) {});

var server = app.listen(8080, function () {
	var port = server.address().port
	console.log("\nServer running http://localhost:%s", port)
});
