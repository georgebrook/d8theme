const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp-tasks');

const paths = {
  styles: 'styles',
  scripts: 'scripts',
  images: 'images',
};

gulp.task('styles', gulp.series('clean:styles', 'lint:styles', 'build:styles'));
gulp.task(
  'scripts',
  gulp.series('clean:scripts', 'lint:scripts', 'build:scripts')
);
gulp.task('images', gulp.series('clean:images', 'minify:images'));

gulp.task('watch', () => {
  gulp.watch(`${paths.styles}/**/*.scss`, gulp.parallel('styles'));
  gulp.watch(`${paths.scripts}/**/*.js`, gulp.parallel('scripts'));
  gulp.watch(`${paths.images}/**/*`, gulp.parallel('images'));
});

gulp.task('dev', gulp.series('styles', 'scripts', 'images'));
gulp.task('default', gulp.series('dev', 'watch'));
