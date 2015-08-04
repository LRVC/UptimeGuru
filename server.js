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

// 	var urlArray = [  "http://digitalcomicshopper.ninja",
// 											"http://thelearnersguild.herokuapp.com/",
// 											"http://therapyfixx.com",
// 											"http://www.g7quizracer.com/",
// 											"https://hidden-retreat-5290.herokuapp.com/",
// 											"http://journalwithclarity.com/",
// 											"https://rentalrater.herokuapp.com/",
// 											"http://wordswithcharles.herokuapp.com",
// 											"http://www.belp-it.com"	];

// 	setInterval(function() {
// 		var url;
// 		var start = new Date();
// 		for(var i = 0; i < urlArray.length; i++) {
// 			url = urlArray[i];
// 			var time = (new Date() - start);
// 			console.log('response' + i);
// 			socket.emit('response' + i, {responseTime: i, statusCode: 200, url: url});
// 		}
// 	},1000)
// });



