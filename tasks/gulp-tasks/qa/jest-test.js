const gulp = require('gulp');
const jest = require('gulp-jest').default;

gulp.task('jest', function () {
  return gulp.src('src/**/test/**/*.ts').pipe(jest({
    "automock": false
  }));
});
