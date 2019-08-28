const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

const paths = {
  scripts: 'scripts',
  js: 'dist/js',
};

gulp.task('lint:scripts', () =>
  gulp
    .src(`${paths.scripts}/**/*.js`)
    .pipe(eslint({ configFile: '.eslintrc.json' }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('build:scripts', () =>
  gulp
    .src(`${paths.scripts}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(gulp.dest(`./${paths.js}`))
    .pipe(uglify({ mangle: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${paths.js}`))
);
