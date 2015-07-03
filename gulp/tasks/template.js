var path = require('path');
var templateCache = require('gulp-angular-templatecache');

module.exports = function(gulp, $, utils, config) {
  gulp.task('template', function() {
    return gulp.src(config.paths.tpl)
      .pipe(templateCache('jsonViewer.tpl.js', {
        module: 'jv.json-viewer'
      }))
      .pipe(gulp.dest(config.paths.tplOutputFolder));
  });
};
