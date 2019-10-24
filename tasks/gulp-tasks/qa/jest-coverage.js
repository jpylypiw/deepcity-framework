const gulp = require('gulp');
const jest = require('gulp-jest').default;

gulp.task('jest-coverage', function () {
  return gulp.src('src/**/test/**/*.ts').pipe(jest({
    "automock": false,
    "collectCoverage": true,
    "coverageReporters": ["text"],
  }));
});
