const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const notify = require('gulp-notify');
const s = size({
  showFiles: true
});

const paths = {
  images: 'images',
  img: 'dist/img',
};

gulp.task('minify:images', () =>
  gulp
    .src(`${paths.images}/**/*`)
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
        },
      ),
    )
    .pipe(gulp.dest(`./${paths.img}`))
    .pipe(s)
    .pipe(
      notify({
        onLast: true,
        message: () => `Total Image Asset Size: ${s.prettySize}`,
      })
    )
);
