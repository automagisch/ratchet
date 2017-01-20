var gulp 		= require('gulp');
var handlebars  = require('gulp-handlebars');
var wrap 		= require('gulp-wrap');
var declare 	= require('gulp-declare');
var concat 		= require('gulp-concat');

module.exports = function() {

	return gulp.src('./src/handlebars/*.hbs')
		.pipe(handlebars({
			handlebars: require('handlebars')
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'Handlebars.templates',
			noRedeclare: true, // Avoid duplicate declarations 
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('dist/assets/js'));

}
