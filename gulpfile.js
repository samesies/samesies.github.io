'use strict';

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');

gulp.task('browserify', () => {
  return browserify('./_assets/js/app.js')
  .transform('babelify', {presets: ['env']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('build', ['browserify']);

gulp.task('watch', () => {
  gulp.watch('./_assets/js/**/*.js', ['browserify']);
});

gulp.task('default', ['build', 'watch']);
