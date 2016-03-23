/**
 * GULP and PROCESS dependencies
 */
var path 		= require('path');
var fs 			= require('fs');
var gulp 		= require('gulp');
var sass 		= require('gulp-ruby-sass');
var fileInclude	= require('gulp-file-include');
var nodemon 	= require('gulp-nodemon');
var concat 		= require('gulp-concat');
var sourcemaps 	= require('gulp-sourcemaps');
var assets 		= require('gulp-bower-assets');
var imagemin 	= require('gulp-imagemin');
var watch 		= require('gulp-watch');
var ftp 		= require('gulp-ftp');
var gutil 		= require('gulp-util');
var config 		= require('ini').parse(fs.readFileSync('./config.ini', 'utf-8'));

/**
 * SASS task
 * @description: handles off sass to css compilation
 */
gulp.task('styles', function() {

	// initiates main.scss compilation in src folder
	return sass('./src/scss/main.scss', {
		sourcemap: true,
		loadPath: [
			'bower_components/bootstrap-sass/assets/stylesheets/',
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

});

/**
 * HTML task
 * @description: compiles all html in './src/html' with fileInclude and output to './dist'
 */
gulp.task('html', function() {

	// target files
	gulp.src('./src/html/*.html')
 
	// pipe fileInclude to compile html
	.pipe(fileInclude())

	// output to dist folder for serving
	.pipe(gulp.dest('./dist'));

});

/**
 * SCRIPTS task
 * @description: watches src folder for changes and perform tasks on them
 */
gulp.task('scripts', function() {

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
	}).map(function(file) {
		return 'src/scripts/' + file;
	});

	// take the list of files
	return gulp.src(files)

	// concatenate these files into one file
	.pipe(concat('main.js'))

	// output the concat file to dist/assets/js
	.pipe(gulp.dest('./dist/assets/js'));

});

/**
 * BOWER task
 * @description: hooks up bower files using gulp-bower-assets
 */
gulp.task('bower', function() {

	// select the assets.json file for parsing
	return gulp.src('assets.json')

	// run gulp-bower-assets to concat the bower files
	.pipe(assets({
		prefix: false
	}))

	// output to vendor folder in the assets directory of dit
	.pipe(gulp.dest('./dist/assets'))

});

/**
 * IMAGES task
 * @description: optimizes all images before outputted to dist
 */
gulp.task('images', function() {

	// get the fileset of images
	return gulp.src('./src/images/**/*')

	// push them through gulp-imagemin
	.pipe(imagemin())

	// output to dist folder
	.pipe(gulp.dest('./dist/assets/images'));

});

/**
 * WATCH task
 * @description: watches src folder for changes and perform tasks on them
 */
gulp.task('watch', function() {
	// watches the scss folder for changes, if a change is detected, it runs task 'styles'
	gulp.watch('./src/scss/**/*.scss', ['styles']);
	// watches the html folder for changes, if a change is detected, it runs task 'html'
	gulp.watch('./src/html/**/*.html', ['html']);
	// watches the scripts folder for changes, if a change is detected, it runs task 'scripts'
	gulp.watch('./src/scripts/**/*.js', ['scripts']);
	// watches the images folder for changes, if a change is detected, it runs task 'images'
	gulp.watch('./src/images/**/*.{jpg|png|svg}', ['images']);
});	

/**
 * NODEMON task
 * @description: boots up the server simultaneously with gulp
 */
gulp.task('start', function() {
	// boot up nodeman, only watching the root folder with exceptions to keep restarting to a minimum
	nodemon({
		ext: 'js',
		ignore: ['dist/*','src/*','gulpfile.js'],
		script: 'index.js'
	});
});

/**
 * BUILD task
 * @description: builds the dist folder without starting the server and watch tasks
 */
gulp.task('build', ['bower','images','scripts','styles','html']);

/**
 * DEPLOY task
 * @description: deploys the entire dist folder and 
 */
gulp.task('deploy', function() {

	// extend default config on INI config
	var ftpConfig = {
		host: null,
		user: null,
		pass: null,
		remotePath: null
	}

	if(config.ftp) {
		for(var prop in config.ftpConfig) {
			if(config.ftp.hasOwnProperty(prop)) {
				ftpConfig[prop] = config.ftp[prop];
			}
		}
	}

	// select the dist folder
	gulp.src('./dist/**/')

	// // upload it to ftp
	.pipe(ftp({
		host: config.ftp.host,
		user: config.ftp.user,
		pass: config.ftp.pass,
		remotePath: config.ftp.remotePath
	}))

	// // gulp end point
	.pipe(gutil.noop());

});

/**
 * DEFAULT task
 * @description: defines 'gulp' command tasks
 */
gulp.task('default', ['bower','images','scripts','styles','html','watch','start']);