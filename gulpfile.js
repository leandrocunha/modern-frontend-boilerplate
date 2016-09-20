var gulp 		= require('gulp'),
	livereload  = require('gulp-livereload'),
	sourcemaps  = require('gulp-sourcemaps'),
	stylus 		= require('gulp-stylus');

var paths = {
	css: 'assets/css/',
	stylus: {
		src: 'src/stylus/app.styl',
		watch: 'src/stylus/**/*.styl'
	}
};

function buildStylus(options) {
  var build = function() {
    gulp
     .src(options.src)
     .pipe(sourcemaps.init())
     .pipe(stylus({
        compress: options.uglify,
        use: [],
        "include css": options.includeCss
      }))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest(options.dest))
     .pipe(livereload());
  }

  return build();
}

gulp.task('somenthing', function() {
	console.log('Hi, Gulp!')
});

gulp.task('stylus-dev', function() {
  return buildStylus({
    includeCss: true,
    dest: paths.css,
    src: paths.stylus.src,
    uglify: false,
    watch: true
  });
});

gulp.task( 'watch', function() {
  livereload.listen();
  gulp.watch(paths.stylus.watch, ['stylus-dev']);
})

gulp.task('default', ['stylus-dev', 'watch']);
gulp.task('build', ['somenthing']);