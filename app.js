var express = require('express');
var app = express();
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var ecoBotServer = require('./modules/ecoBot.js');
var ecoBot = new ecoBotServer(5432);


app.use("/bower_components", express.static(__dirname + '/app/bower_components'));
app.use("/js", express.static(__dirname + '/app/js'));
app.use("/socket.io", express.static(__dirname + '/app/js/socket.io'));
app.use("/styles", express.static(__dirname + '/app/styles'));
app.use("/app", express.static(__dirname + '/app'));
app.use("/modules", express.static(__dirname + '/app/modules'));
app.use("/services", express.static(__dirname + '/app/services'));
app.use("/assets", express.static(__dirname + '/app/assets'));




io.sockets.on('connection', function (socket) {

  ecoBot.on('sensor', function(data) {
    socket.emit('eco-data', data);
  });

  // setInterval(function(){

  // 	socket.emit('eco-data', {key:'sensor1', value:(Math.floor(Math.random() * 10) + 1)/10});
  // 	socket.emit('eco-data', {key:'sensor2', value:(Math.floor(Math.random() * 10) + 1)/10});
  // 	socket.emit('eco-data', {key:'sensor3', value:(Math.floor(Math.random() * 10) + 1)/10});
  // 	socket.emit('eco-data', {key:'sensor4', value:(Math.floor(Math.random() * 10) + 1)/10});
  // 	socket.emit('eco-data', {key:'sensor5', value:(Math.floor(Math.random() * 10) + 1)/10});
  // 	socket.emit('eco-data', {key:'sensor6', value:(Math.floor(Math.random() * 10) + 1)/10});
  //   socket.emit('eco-data', {key:'sensor7', value:(Math.floor(Math.random() * 10) + 1)/10});
  //   socket.emit('eco-data', {key:'sensor8', value:(Math.floor(Math.random() * 10) + 1)/10});

  // }, 2000);
  
});

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/app/index.html');
});

server.listen(3000);
