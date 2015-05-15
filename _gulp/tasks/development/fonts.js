var gulp        = require('gulp');
var cache       = require('gulp-cached');
var browsersync = require('browser-sync');
var config      = require('../../config').fonts;

/**
 * Copy images to build folder
 * if not changed. (Nothing else currently.)
 */
gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(cache('fonts')) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
