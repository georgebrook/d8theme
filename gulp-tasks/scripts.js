const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const size = require('gulp-size');
const notify = require('gulp-notify');
const s = size({
  showFiles: true
});

const paths = {
  scripts: 'scripts',
  js: 'dist/js',
};

gulp.task('lint:scripts', () =>
  gulp
    .src([
      `${paths.scripts}/**/*.js`,
      `!${paths.scripts}/gla-nested-checkboxes.js`,
    ])
    .pipe(eslint({ configFile: '.eslintrc.json' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('build:scripts', () =>
  gulp
    .src(`${paths.scripts}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${paths.js}`))
    .pipe(s)
    .pipe(
      notify({
        onLast: true,
        message: () => `Total JS Size: ${s.prettySize}`,
      })
    )
);
