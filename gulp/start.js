var gulp 	= require('gulp');
var nodemon = require('gulp-nodemon');

/**
 * START task
 * @description: boots up the server simultaneously with gulp
 */
module.exports = function() {
	
	// boot up nodeman, only watching the root folder with exceptions to keep restarting to a minimum
	nodemon({
		ext: 'js',
		ignore: ['dist/*','src/*','gulpfile.js'],
		script: 'index.js'
	});

}