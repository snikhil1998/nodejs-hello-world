var express = require('express');
var app = express();
app.use(express.static('src'));
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var port = process.env.PORT || 4000;

http.listen(port, function() {
	console.log('listening on *: ' + port);
});
