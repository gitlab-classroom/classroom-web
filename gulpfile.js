var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cjsx = require('gulp-cjsx');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var addsrc = require('gulp-add-src');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var env = require('gulp-env');
var gutil = require('gulp-util');
var process = require('process');
var rename = require("gulp-rename");

gulp.task('webserver', function() {
  var production = process.env.NODE_ENV === 'production';

  return gulp.src('./dist')
  .pipe(webserver({
    livereload: true,
    proxies: [{
          source: '/api',
          target: 'https://htc.fdu13ss.org/api'
        }],
    fallback: production ? 'index_production.html' : 'index.html',
    filter: function(fileName) {
      return fileName.match(/app\.js$/)
    },
    directoryListing: false,
    open: true
  }));
});

var paths = {
  js: 'src/**/*.cjsx',
  css: 'src/**/*.scss',
  assets: 'assets/**/*',
}

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('compile', function(done) {
  var production = process.env.NODE_ENV === 'production';
  console.log('production: ', production);

  return browserify({
    entries: 'src/index.cjsx',
    transform: ['coffee-reactify'],
    extensions: ['.cjsx'],
    debug: !production
  })
   .bundle()
   .on('error', swallowError)
   .pipe(source('app.js'))
   .pipe(buffer())
   .pipe(production ? uglify() : gutil.noop())
   .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {
  return gulp.src(paths.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets', function() {
  return gulp.src(paths.assets)
    .pipe(gulp.dest('./dist/assets'));
});

gulp.task('index_html', function() {
  var production = process.env.NODE_ENV === 'production';

  return gulp.src(production ? 'index_production.html' : 'index.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['compile', 'sass', 'assets', 'index_html'], function() {
  gulp.watch(paths.js, function() {
    gulp.start('compile');
  });
  gulp.watch(paths.css, function() {
    gulp.start('sass');
  });
  gulp.watch(paths.assets, function() {
    gulp.start('assets');
  });
  gulp.watch('index.html', function() {
    gulp.start('index_html');
  })
})

gulp.task('production-env', function() {
  return env({
    vars: {
      NODE_ENV: 'production'
    }
  })
})

gulp.task('default', ['watch', 'webserver']);
gulp.task('release', ['production-env', 'sass', 'assets', 'compile'])
