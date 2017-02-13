var path 	= require('path');
var fs 		= require('fs');
var gulp 	= require('gulp');
var concat 	= require('gulp-concat');

/**
 * SCRIPTS task
 * @description: watches src folder for changes and perform tasks on them
 */
module.exports = function(done) {

	// variable that is going to hold a main.js position, -1 if not available
	var mainFilePosition;

	// 1. (readdirsync) retrieve a list of files and only get the javascript files using filter
	var files = fs.readdirSync('./src/scripts').filter(function(file) {
		return path.extname(file) === '.js';
	})

		// 2. if a file carries the name 'main.js', make sure it's at the end of the array
		.sort(function(a,b) {
			if(a === 'main.js') {
				return 1;
			} else {
				return -1;
			}
		})

		// 3. make sure the paths are correct
		.map(function(file) {
			return 'src/scripts/' + file;
		});

	// take the list of files
	return gulp.src(files)

		// concatenate these files into one file
		.pipe(concat('main.js'))

		// output the concat file to dist/assets/js
		.pipe(gulp.dest('./dist/assets/js'));

	// opt out this gulp task
	done();

}