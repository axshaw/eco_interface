var util = require('util'),
	EE = require('events').EventEmitter,
	net = require('net');

var ecoBotServer = function(port) {

	var self = this,
		buffer = '';

	function init(ecoPort) {
		
		var server = net.createServer(function(connection) {
			connection.on('data', function(data) {
				emitNewMessage(data);
			});
		});

		server.listen(ecoPort);
	};

	function emitNewMessage(data) {
		buffer += data;
		var boundary = buffer.indexOf('\n');
		while(boundary !== -1) {
			var input = buffer.substr(0, boundary);
			buffer = buffer.substr(boundary + 1);
			self.emit('sensor', JSON.parse(input));
			boundary = buffer.indexOf('\n');
		}
	};

	init(port);
};

util.inherits(ecoBotServer, EE);
module.exports = ecoBotServer;