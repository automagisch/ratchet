/**
 * GULP and PROCESS dependencies
 */
var config 	    = require('ini').parse(require('fs').readFileSync('./config.ini', 'utf-8'));
var gulp 		= require('gulp');
require('gulp-task-loader')('gulp');

// define which javascript task to use
var javascript_task = config.ratchet.use_es6 ? 'babel' : 'scripts';

/**
 * BUILD task
 * @description: builds the dist folder without starting the server and watch tasks
 */
gulp.task('build', ['bower','images', javascript_task,'handlebars','styles','html']);

/**
 * DEFAULT task
 * @description: defines 'gulp' command tasks
 */
gulp.task('default', ['bower','images',javascript_task,'handlebars','styles','html','watch','start']);