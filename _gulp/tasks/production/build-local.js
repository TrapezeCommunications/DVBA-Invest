var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:local', function(callback) {
  runSequence(['delete'],
  [
    'sass',
    'test',
    'scripts',
    'images',
    'jekyll',
    'fonts'
  ],
  callback);
});