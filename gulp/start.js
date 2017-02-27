var fs 		= require('fs');
var chalk 	= require('chalk');
var gulp 	= require('gulp');
var nodemon = require('gulp-nodemon');
var config 	= require('ini').parse(fs.readFileSync('./config.ini', 'utf-8'));

function displayASCIIArt() {
console.log(chalk.cyan(
` 	

~~~~~~~~~~~~~ https://github.com/automagisch/ratchet ~~~~~~~~~~~~~~~

______    _______  _______  _______  __   __  _______  _______ 
|    _ |  |   _   ||       ||       ||  | |  ||       ||       |
|   | ||  |  |_|  ||_     _||       ||  |_|  ||    ___||_     _|
|   |_||_ |       |  |   |  |       ||       ||   |___   |   |  
|    __  ||       |  |   |  |      _||       ||    ___|  |   |  
|   |  | ||   _   |  |   |  |     |_ |   _   ||   |___   |   |  
|___|  |_||__| |__|  |___|  |_______||__| |__||_______|  |___|  1.0

F R O N T - E N D 
B O I L E R P L A T E

~~~~~~~~~~~~~~~~~~~~~~~ (c) Koen Houtman, 2017 ~~~~~~~~~~~~~~~~~~~~~

`));
}

if(config.ratchet.show_ascii_art) {
	displayASCIIArt();
}

/**
 * START task
 * @description: boots up the server simultaneously with gulp
 */
module.exports = function(done) {

	// boot up nodeman, only watching the root folder with exceptions to keep restarting to a minimum
	nodemon({
		ext: 'js',
		ignore: ['dist/*','src/*','gulpfile.js'],
		script: 'index.js'
	});

	// opt out this gulp task
	done();

}