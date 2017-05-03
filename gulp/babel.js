var path 				= require('path');
var fs 					= require('fs');
var gulp 				= require('gulp');
var gutil 			= require('gulp-util');
var browserify 	= require('browserify');
var babelify 		= require('babelify');
var source 			= require('vinyl-source-stream');
var buffer 			= require('vinyl-buffer');
var chalk 			= require('chalk');
var uglify 			= require('gulp-uglify');

/**
 * BABEL task
 * @description: builds the dist folder without starting the server and watch tasks
 * note: when used with --production, it minifies the code
 */
module.exports = function(done) {

	browserify({
			entries: ['./src/scripts/main.babel'],
			extensions: ['.babel'],
			debug: true
		})
		.transform(babelify, {
			extensions: ['.babel'],
			presets: ["es2015"],
			sourceRoot: './src/scripts/',
			sourceMaps: gutil.env.production ? false : true
		})
		.bundle()
		.on('error', function(err) {
			console.log(chalk.red('\nOopsie-daysee! You made an unforgivable typo:\n'));
			console.log(`${err.codeFrame}\n`);
			console.log(`>>> ${path.basename(err.fileName)} (line ${err.loc.line}, col ${err.loc.column} ]\n`);
			this.emit('end');
		})
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gutil.env.production ? uglify() : gutil.noop())
		.pipe(gulp.dest('./dist/assets/js'));

	// opt out this gulp task
	done();

}
