var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');

gulp.task('webserver', function() {
  return gulp.src('.')
  .pipe(webserver({
    livereload: true,
    proxies: [{
          source: '/api',
          target: 'https://htc.fdu13ss.org/api'
        }],
    fallback: 'index.html',
    directoryListing: false,
    open: true
  }));
});

var paths = {
  js: 'src/**/*.cjsx'
}

gulp.task('compile', function(done) {
  return browserify({
    entries: 'src/index.cjsx',
    transform: ['coffee-reactify'],
    extensions: ['.cjsx']
  })
   .bundle()
   .pipe(source('app.js'))
   .pipe(addsrc('lib/jquery.js'))
   .pipe(gulp.dest('./classroom'));
});

gulp.task('watch', ['compile'], function() {
  gulp.watch(paths.js, function() {
    gulp.start('compile');
  });
})

gulp.task('default', ['webserver', 'watch']);
