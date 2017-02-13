var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

/**
 * IMAGES task
 * @description: optimizes all images before outputted to dist
 */
module.exports = function(done) {

	// get the fileset of images
	return gulp.src('./src/images/**/*')

		// push them through gulp-imagemin
		.pipe(imagemin({
			verbose: true
		}))

		// output to dist folder
		.pipe(gulp.dest('./dist/assets/images'));

	// opt out this gulp task
	done();

}