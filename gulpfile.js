
const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const order = require('gulp-order');
const plumber = require('gulp-plumber');

var targetName = 'index.js';

gulp.task('clean', function() {
  return del([ 'lib/*' ]);
});

gulp.task('build', function() {
  return gulp.src([ 'src/main/js/**/*.js' ])
    .pipe(plumber({
      errorHandler : notify.onError({
        title : 'error in <%= error.plugin %>',
        message : '<%= error.message %>'
      })
    }) )
    .pipe(babel({
      presets: ['@babel/env']
    }) )
    .pipe(order([ '**/*.js']) )
    .pipe(concat(targetName) )
    .pipe(gulp.dest('lib/') );
});

gulp.task('watch', function() {
  gulp.watch([
      './src/main/js/**/*.js',
      './src/main/js/**/*.vue',
      './src/test/js/**/*.js'
    ], gulp.series('build') )
    .on('change', function(path) {
      console.log(path);
    });
});

gulp.task('default', gulp.series('build') );
