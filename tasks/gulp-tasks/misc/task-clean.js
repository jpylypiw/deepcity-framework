const gulp =require('gulp');
const gulpClean = require('gulp-clean');

/*
  A simple clean task that removes the directory that contains the
  previously built version of the software from the distribution directory.
*/
gulp.task('clean', function() {
  return gulp.src(
    ['dist/'],
    {
      read: false,
      allowEmpty: true
    })
    .pipe(gulpClean());
});
