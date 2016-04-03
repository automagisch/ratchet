var gulp = require('gulp');

/**
 * WATCH task
 * @description: watches src folder for changes and perform tasks on them
 */
module.exports = function() {

	// watches the scss folder for changes, if a change is detected, it runs task 'styles'
	gulp.watch('./src/scss/**/*.scss', ['styles']);
	// watches the html folder for changes, if a change is detected, it runs task 'html'
	gulp.watch('./src/html/**/*.html', ['html']);
	// watches the scripts folder for changes, if a change is detected, it runs task 'scripts'
	gulp.watch('./src/scripts/**/*.js', ['scripts']);
	// watches the images folder for changes, if a change is detected, it runs task 'images'
	gulp.watch('./src/images/**/*.{jpg|png|svg}', ['images']);

}