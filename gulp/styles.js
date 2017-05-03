var gulp 				= require('gulp');
var gutil 			= require('gulp-util');
var sass 				= require('gulp-ruby-sass');
var sourcemaps 	= require('gulp-sourcemaps');
var minify 			= require('gulp-clean-css');
var converter 	= require('byte-converter').converterBase2;

/**
 * STYLES task
 * @description: handles off sass to css compilation
 */
module.exports = function(done) {

	// initiates main.scss compilation in src folder
	return sass('./src/scss/main.scss', {
		sourcemap: gutil.env.production ? false : true,
		loadPath: [
			'bower_components/font-awesome/scss'
		]
	})

		// logs the error if anything breaks
		.on('error', sass.logError)

		// generates a file source map
		.pipe(gutil.env.production ? gutil.noop() : sourcemaps.write({
	      includeContent: false,
	      sourceRoot: 'source'
	    }))

		// in production mode, minify the output
		.pipe(gutil.env.production ? minify({compatibility: 'ie8'}, function(details) {

			var originalSize = Math.round(converter(details.stats.originalSize, 'B', 'KB') * 10) / 10;
			var compressedSize = Math.round(converter(details.stats.minifiedSize, 'B', 'KB') * 10) / 10;

			gutil.log(gutil.colors.green(`CSS minified, compressed from: ${originalSize}kb to ${compressedSize}kb.`));

		}) : gutil.noop())

	    // output to dist asset folder
		.pipe(gulp.dest('dist/assets/css'));

	// opt out this gulp task
	done();

}
