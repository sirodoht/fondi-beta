var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', ['less'], function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['*.html', 'less/**/*.less', 'js/**/*.js', 'img/**/*'], ['less', reload]);
});

gulp.task('default', function () {
  console.log('# Gulp tasks');
  console.log('gulp less :: Compile Less styles');
  console.log('gulp serve :: Compile Less styles, serve browser-sync server and watch for Less changes.');
});
