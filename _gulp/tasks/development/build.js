var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(['delete'],
  [
    'jekyll',
    'sass',
    'test',
    'scripts'
  ], "delete-assets",
  callback);
});

/*
  [
    'jekyll',
    'sass',
    'scripts',
    'images',
    'copy:fonts'
  ],
  'base64',
*/