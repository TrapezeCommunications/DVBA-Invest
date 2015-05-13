var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config');

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
  del(config.delete.src, callback);
});

gulp.task('delete-assets', function(callback) {
  del(config.delete.jekyllAssets, callback);
});
