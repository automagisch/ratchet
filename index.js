// include dependencies
var fs 		= require('fs');
var express = require('express');
var app 	= express();
var config 	= require('ini').parse(fs.readFileSync('./config.ini', 'utf-8'));

// set the root directory to dist
app.use(express.static(__dirname + '/dist'));

// creates the index route that will serve the dist folder
app.get('/', function(req, res) {
	res.send('/dist');
});

console.log('Application is running at port ' + config.app.port);

// boots the server
app.listen(config.app.port);