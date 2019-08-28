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

gulp.task('watch:styles', () =>
  gulp.watch(`${paths.styles}/**/*.scss`, gulp.series('styles'))
);

gulp.task('watch:scripts', () =>
  gulp.watch(`${paths.scripts}/**/*.js`, gulp.series('scripts'))
);

gulp.task('watch:images', () =>
  gulp.watch(`${paths.images}`, gulp.series('images'))
);
gulp.task(
  'watch',
  gulp.parallel('watch:styles', 'watch:scripts', 'watch:images')
);

gulp.task('default', gulp.series('styles', 'scripts', 'images', 'watch'));
