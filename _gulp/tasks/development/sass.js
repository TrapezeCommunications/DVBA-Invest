var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../../config');
var scsslint     = require('gulp-scss-lint');
var cache        = require('gulp-cached');

/**
 * Generate CSS from SCSS
 * Build sourcemaps
 */
gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  sassConfig.onError = browsersync.notify;



  // console.log("running sass");
  browsersync.notify('Compiling Sass');

  return sass(config.sass.src, sassConfig)
    .pipe(cache('sass'))
    .on('error', function (err) {
      console.error('Error', err.message);
      browsersync.notify('Sass Error: ' + err.message);
    })
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest));


});