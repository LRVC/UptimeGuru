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
			var url = "http://thelearnersguild.herokuapp.com/";
			http.get(url, function(res) {
				var time = (new Date() - start);
				socket.emit('responseTwo', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://therapyfixx.com";
			http.get("http://therapyfixx.com", function(res) {
				var time = (new Date() - start);
				socket.emit('responseThree', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://www.g7quizracer.com/";
			http.get("http://www.g7quizracer.com/", function(res) {
				var time = (new Date() - start);
				socket.emit('responseFour', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "https://hidden-retreat-5290.herokuapp.com/";
			http.get("http://hidden-retreat-5290.herokuapp.com/", function(res) {
				var time = (new Date() - start);
				socket.emit('responseFive', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://journalwithclarity.com/";
			http.get("http://journalwithclarity.com/", function(res) {
				var time = (new Date() - start);
				socket.emit('responseSix', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "https://rentalrater.herokuapp.com/";
			http.get("http://rentalrater.herokuapp.com/", function(res) {
				var time = (new Date() - start);
				socket.emit('responseSeven', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://wordswithcharles.herokuapp.com";
			http.get("http://wordswithcharles.herokuapp.com", function(res) {
				var time = (new Date() - start);
				socket.emit('responseEight', {responseTime: time, statusCode: res.statusCode, url: url});
			}).on('error', function(e) {
				console.log("Error: " + e.message)
			})
		},1000)

		setInterval(function() {
			var start = new Date();
			var url = "http://www.belp-it.com";
			http.get("http://www.belp-it.com", function(res) {
				var time = (new Date() - start);
				socket.emit('responseNine', {responseTime: time, statusCode: res.statusCode, url: url});
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



