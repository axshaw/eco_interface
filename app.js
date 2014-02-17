var express = require('express');
var app = express();
var http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var ecoBotServer = require('eco-server');
var ecoBot = new ecoBotServer(5432);

var ecoBotMockData = require('./modules/ecoBotMockData.js')();


app.use("/bower_components", express.static(__dirname + '/app/bower_components'));
app.use("/js", express.static(__dirname + '/app/js'));
app.use("/socket.io", express.static(__dirname + '/app/js/socket.io'));
app.use("/styles", express.static(__dirname + '/app/styles'));
app.use("/app", express.static(__dirname + '/app'));
app.use("/modules", express.static(__dirname + '/app/modules'));
app.use("/directives", express.static(__dirname + '/app/directives'));
app.use("/services", express.static(__dirname + '/app/services'));
app.use("/assets", express.static(__dirname + '/app/assets'));


io.sockets.on('connection', function (socket) {

  ecoBot.on('sensor', function(data) {
    socket.emit('eco-data', data);
  });

});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.get('/getSensorData', function(req, res) {
	var sensor = req.query.sensor;
	var startDate = req.query.startDate;

	//TODO: remove this max
	var maxSensorReading = req.query.max || 30;

	//for now just randomly ask for any number of readings per day
	var numberOfReadingsPerDay = Math.floor(Math.random()*15);

	res.send(ecoBotMockData.getMockSensorData(7, numberOfReadingsPerDay, maxSensorReading));
});

server.listen(3000);
