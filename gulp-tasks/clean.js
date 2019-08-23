const gulp = require('gulp');
const clean = require('gulp-clean');

const paths = {
  css: 'dist/css',
  js: 'dist/js',
  img: 'dist/img',
};

gulp.task('clean:scripts', () =>
  gulp.src(`./${paths.js}/**/*.js*`).pipe(clean()),
);

gulp.task('clean:styles', () =>
  gulp.src(`./${paths.css}/**/*.css*`).pipe(clean()),
);

gulp.task('clean:images', () => gulp.src(`./${paths.img}`).pipe(clean()));
