/**
 * GULP and PROCESS dependencies
 */
var gulp 		= require('gulp');
require('gulp-task-loader')('gulp');

/**
 * BUILD task
 * @description: builds the dist folder without starting the server and watch tasks
 */
gulp.task('build', ['bower','images','scripts','styles','html']);

/**
 * DEFAULT task
 * @description: defines 'gulp' command tasks
 */
gulp.task('default', ['bower','images','scripts','styles','html','watch','start']);