var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

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
  js: 'src/**/*.cjsx',
  css: 'src/**/*.scss',
  assets: 'assets/**/*'
}

gulp.task('compile', function(done) {
  return browserify({
    entries: 'src/index.cjsx',
    transform: ['coffee-reactify'],
    extensions: ['.cjsx']
  })
   .bundle()
   .pipe(source('app.js'))
   .pipe(addsrc('lib/*'))
   .pipe(gulp.dest('./classroom'));
});

gulp.task('sass', function () {
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./classroom'));
});

gulp.task('assets', function() {
  return gulp.src(paths.assets)
    .pipe(gulp.dest('./classroom/assets'));
})

gulp.task('watch', ['compile', 'sass', 'assets'], function() {
  gulp.watch(paths.js, function() {
    gulp.start('compile');
  });
  gulp.watch(paths.css, function() {
    gulp.start('sass');
  });
  gulp.watch(paths.assets, function() {
    gulp.start('assets');
  })
})

gulp.task('default', ['watch', 'webserver']);
