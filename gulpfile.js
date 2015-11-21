var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('compile', function() {
  gulp.src('src/**/*.cjsx')
    .pipe(cjsx({bare: true}).on('error', function(e) {console.log(e)}))
    .pipe(gulp.dest('./dist/'));
})
