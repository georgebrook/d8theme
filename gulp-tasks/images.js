const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const paths = {
  images: 'images',
  img: 'dist/img',
};

gulp.task('minify:images', () =>
  gulp
    .src(`${paths.images}/**/*`, { passthrough: true })
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(gulp.dest(paths.img))
);
