var gulp 		= require('gulp');
var sass 		= require('gulp-ruby-sass');
var sourcemaps 	= require('gulp-sourcemaps');

/**
 * STYLES task
 * @description: handles off sass to css compilation
 */
module.exports = function(done) {

	// initiates main.scss compilation in src folder
	return sass('./src/scss/main.scss', {
		sourcemap: true,
		loadPath: [
			'bower_components/font-awesome/scss'
		]
	})

		// logs the error if anything breaks
		.on('error', sass.logError)

		// generates a file source map
		.pipe(sourcemaps.write({
	      includeContent: false,
	      sourceRoot: 'source'
	    }))

	    // output to dist asset folder
		.pipe(gulp.dest('dist/assets/css'));

	// opt out this gulp task
	done();

}