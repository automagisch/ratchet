// this task is run once when ratchet package installs.
// it'll make sure that all default asset files are being made.
// the contents of these files are empty only, compiling takes 
// place in the several specific gulp tasks Ratchet utilizes.

var fs 		= require('fs');
var gulp 	= require('gulp');
var gutil 	= require('gulp-util');

// lists all default files
var defaultFiles = [
	'./dist/assets/css/main.css',
	'./dist/assets/css/vendor.css',
	'./dist/assets/js/vendor.js',
	'./dist/assets/js/templates.js',
	'./dist/assets/js/main.js'
];

module.exports = function() {

	// loops over the default files and 
	// uses FS to write these.
	defaultFiles.forEach(function(file) {
		fs.writeFileSync(file, '');
	});

	return gulp.src('./dist')
		.pipe(gutil.noop());

}