var fs    = require('fs');
var gulp  = require('gulp');
var path  = require('path');
var watch = require('gulp-watch');
var chalk = require('chalk');

/*
	Utility function for deleting files to avoid
	duplicates and 'unlinked' files from src to dist
 */
function syncDeletion(p, callback) {

	if(!callback) var callback = function(){};

	var srcFile = path.parse(p);
	var distPath = srcFile.dir.replace('src/','dist/assets/');
	if(fs.existsSync(distPath + '/' + srcFile.base)) {
		fs.unlink(distPath + '/' + srcFile.base, function() {
			callback(srcFile.base);
		});
	}
}

/**
 * WATCH task
 * @description: watches src folder for changes and perform tasks on them
 */
module.exports = function(done) {

	// watches the scss folder for changes, if a change is detected, it runs task 'styles'
	watch('src/scss/**/*.scss', gulp.series(['styles']));

	// watches the html folder for changes, if a change is detected, it runs task 'html'
	watch('src/html/**/*.html', gulp.series(['html']));

	// watches the scripts folder for changes, if a change is detected, it runs task 'scripts'
	// (if use_es6 in config is false, this task is used for compiling javascript)
	watch('src/scripts/**/*.js', gulp.series(['scripts']));

	// watches the scripts folder for changes, if a change is detected, it runs task 'babel'
	// (if use_es6 in config is true, this task is used for compiling javascript)
	watch('src/scripts/**/*.babel', gulp.series(['babel']));

	// watches the images folder for changes, if a change is detected, it runs task 'images'
	watch('src/images/**/*.{jpg|png|svg}', gulp.series(['images'])).on('unlink', function(file) {
		syncDeletion(file, function(removedFile) {
			console.log(chalk.red('Ratchet: deleted ' + removedFile + ' from distribution folder.'));
		});
	});

	// watches the handlebars folder for changes, if a change is detected, it runs task 'handlebars'
	watch('src/handlebars/**/*.hbs', gulp.series(['handlebars']));

	// opt out this gulp task
	done();

}