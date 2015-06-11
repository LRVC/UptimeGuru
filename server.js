var http = require('http')

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

var handleRequest = function (request, response) {
	response.writeHead(200, { 'content-type': 'text/plain'});
	response.write("Test");
	response.end();
};

setInterval(statusCodeFunc, 1000);
setInterval(requestTime, 1000);

