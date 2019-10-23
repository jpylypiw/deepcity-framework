const gulp = require('gulp');
const gulpESLint = require("gulp-eslint");

/*
  Check code style of TypeScript source using TSLint
*/
gulp.task('lint', function() {
  return gulp.src('src/**/*.ts')
        .pipe(gulpESLint())
        .pipe(gulpESLint.format())
        .pipe(gulpESLint.failAfterError());
});

