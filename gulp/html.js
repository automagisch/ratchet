var gulp 		= require('gulp');
var fileInclude = require('gulp-file-include');

/**
 * HTML task
 * @description: compiles all html in './src/html' with fileInclude and output to './dist'
 */
module.exports = function() {

	// target files
	return gulp.src('./src/html/*.html')
 
	// pipe fileInclude to compile html
	.pipe(fileInclude())

	// output to dist folder for serving
	.pipe(gulp.dest('./dist'));

}