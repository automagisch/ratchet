var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function() {

	browserify({
			entries: ['./src/scripts/main.babel'],
			extensions: ['.babel'],
			debug: true
		})
		.transform(babelify, {
			extensions: ['.babel'],
			presets: ["es2015"],
			sourceRoot: './src/scripts/'
		})
		.bundle()
		.on('error', function(err) { console.log(err); })
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./dist/assets/js'));

}