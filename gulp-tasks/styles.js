const gulp = require('gulp');
const sass = require('gulp-sass');
const stylelint = require('stylelint');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const sourcemaps = require('gulp-sourcemaps');
const stylelint_scss = require('postcss-scss');
const strip_css_comments = require('gulp-strip-css-comments');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  styles: 'styles',
  css: 'dist/css',
};

const processors = [
  stylelint({ configFile: '.stylelintrc.json' }),
  reporter({
    throwError: true,
    clearMessages: true,
  }),
];

gulp.task('lint:styles', () =>
  gulp
    .src([
      `./${paths.styles}/**/*.scss`,
      `!./${paths.styles}/drupal/*.scss`,
      `!./${paths.styles}/reset.scss`,
    ])
    .pipe(postcss(processors, { syntax: stylelint_scss }))
);

gulp.task('build:styles', () =>
  gulp
    .src(`./${paths.styles}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(strip_css_comments())
    .pipe(cssmin())
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest(paths.css))
);
