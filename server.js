var http = require('http'),
		express = require('express'),
		path = require('path'),
		app = express();
	

app.use(express.static(path.join(__dirname, './www')));

var statusCodeVar;
function requestTime() {
	var start = new Date();
	http.get("http://www.google.com/index.html", function(res) {
		//console.log('Request took:', new Date() - start, 'ms');
	});
}

function statusCodeFunc() {
		http.get("http://www.google.com/index.html", function(res) {
  	statusCodeVar = res.statusCode;
  	//console.log("Got response: " + res.statusCode);
	}).on('error', function(e) {
  	console.log("Got error: " + e.message);
	});
}

setInterval(statusCodeFunc, 1000);
setInterval(requestTime, 1000);

var server = app.listen(3000, function () {
  console.log('Example app listening at http:3000');
});