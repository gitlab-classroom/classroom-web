var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');
var browserify = require('browserify')
var source = require('vinyl-source-stream');

gulp.task('webserver', function() {
  gulp.src('app')
  .pipe(webserver({
    livereload: true,
    directoryListing: true,
    open: true
  }));
});

gulp.task('compile', function(done) {
  return gulp.src('src/**/*.cjsx')
  .pipe(cjsx({bare: true}).on('error', function(e) {console.log(e)}))
  .pipe(gulp.dest('./dist/'))
})

gulp.task('browserify', ['compile'], function(done) {
  return browserify('./dist/index.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('default', ['browserify']);
