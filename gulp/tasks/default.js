module.exports = function (gulp, $, utils, config) {
    gulp.task('default', ['lint', 'template', 'js', 'test']);
};
