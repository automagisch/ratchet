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

// a route used for serving html pages as endpoint urls
app.get('/:file_name', function(req, res) {

	res.type('text/html');

	if(!req.params.file_name) { 
		res.redirect('/'); 
		return;
	}

	var file_search = fs.readdirSync('./dist').find(function(file) {
		if(file.indexOf('.html') == -1) return false;
		fileName = file.split('.')[0];

		if(req.params.file_name == fileName) {
			return true;
		} else {
			return false;
		}
	});

	// 1. is our hit directly in the dist folder?
	if(file_search) {
		res.send(fs.readFileSync('./dist/' + file_search));
	}
	// 3. assuming 404
	else {
		res.redirect('/');
	}

});

// a route that pretends to be an api call by sending static JSON
// used for emulation of Ajax calls
app.all('/api/:model_name', function(req, res) {

	res.type('application/json');

	function sendData() {
		res.send(require('./data/'+req.params.model_name+'.json'));
	}

	if(req.query.timeout) {
		setTimeout(function() {
			sendData();
		}, req.query.timeout);
	} else {
		sendData();
	}

});

console.log('Application is running at port ' + config.app.port);

// boots the server
app.listen(config.app.port);