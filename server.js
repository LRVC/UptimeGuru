var http = require('http');
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
var path = require('path');

var io = require('socket.io').listen(server);


app.use(express.static(path.join(__dirname, './www')));

io.on('connection', function(socket) {
	
	console.log('connected');
	setInterval(function() {
			var start = new Date();
			var url = "http://digitalcomicshopper.ninja"; 
			http.get(url, function(res) {
	  		var time = (new Date() - start);
	  		socket.emit('response', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
	  		console.log("Error: " + e.message);
			});
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://www.reddit.com";
			http.get(url, function(res) {
				var time = (new Date() - start);
				socket.emit('responseTwo', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://www.google.com";
			http.get("http://www.google.com", function(res) {
				var time = (new Date() - start);
				socket.emit('responseThree', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

 });	
