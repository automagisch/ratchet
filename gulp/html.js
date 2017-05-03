var gulp 		= require('gulp');
var fileInclude = require('gulp-file-include');
var prettify = require('gulp-html-prettify');

/**
 * HTML task
 * @description: compiles all html in './src/html' with fileInclude and output to './dist'
 */
module.exports = function(done) {

	// target files
	return gulp.src('./src/html/*.html')

		// pipe fileInclude to compile html
		.pipe(fileInclude())

		// pipe prettify to make html output pretty
		.pipe(prettify({indent_char: ' ', indent_size: 2}))

		// output to dist folder for serving
		.pipe(gulp.dest('./dist'));

	// opt out this gulp task
	done();

}
