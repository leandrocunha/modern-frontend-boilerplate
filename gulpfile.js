var gulp = require('gulp');

var paths = {};

gulp.task('somenthing', function() {
	console.log('Hi, Gulp!')
});

gulp.task('default', ['somenthing']);
gulp.task('build', ['somenthing']);