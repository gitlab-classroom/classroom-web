var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');
var browserify = require('browserify')
var source = require('vinyl-source-stream');

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
  return gulp.src(paths.js)
  .pipe(cjsx({bare: true}).on('error', function(e) {console.log(e)}))
  .pipe(gulp.dest('./dist/'))
})

gulp.task('browserify', ['compile'], function(done) {
  return browserify('./dist/index.js')
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserify'], function() {
  gulp.watch(paths.js, function() {
    gulp.start('browserify');
  });
})

gulp.task('default', ['webserver', 'watch']);
