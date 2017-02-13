/**
 * GULP and PROCESS dependencies
 */
var config 	    = require('ini').parse(require('fs').readFileSync('./config.ini', 'utf-8'));
var gulp 		= require('gulp');
require('gulp-load-tasks')('gulp');

// define which javascript task to use
var javascript_task = config.ratchet.use_es6 ? 'babel' : 'scripts';

/**
 * BUILD task
 * @description: builds the dist folder without starting the server and watch tasks
 */
gulp.task('build', gulp.series(['bower','images', javascript_task,'handlebars','styles','html'], function(done) {
	done();
}));

/**
 * DEFAULT task
 * @description: defines 'gulp' command tasks
 */
gulp.task('default', gulp.series(['bower','images',javascript_task,'handlebars','styles','html','watch','start'], function(done) {
	done();
}));