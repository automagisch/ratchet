var gulp 		= require('gulp');
// var gutil 	= require('gulp-util');
var assets 	= require('gulp-bower-assets');
// var filter 	= require('gulp-filter');
// var minify 	= require('gulp-clean-css');
// var uglify  = require('gulp-uglify');
// var merge 	= require('merge-stream');

/**
 * BOWER task
 * @description: hooks up bower files using gulp-bower-assets
 * @note: handles --production flag for minification
 */
module.exports = function(done) {

	// select the assets.json file for parsing
	return gulp.src('assets.json')
		// run gulp-bower-assets to concat the bower files
		.pipe(assets({
			prefix: false
		}))

		// output to vendor folder in the assets directory of dit
		.pipe(gulp.dest('./dist/assets'))

	// opt out this gulp task
	done();

}
