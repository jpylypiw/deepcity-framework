const gulp = require('gulp');
const ts = require('gulp-typescript');

let tsProject = ts.createProject('tsconfig.json');

/*
  Compile TypeScript source to dist
*/
gulp.task('compile-ts', function() {
  var tsResult = gulp.src('src/**/*.ts')
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});
