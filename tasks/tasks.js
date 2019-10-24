const gulp = require('gulp');

// Import all our tasks
require('./gulp-tasks/misc/task-clean');
require('./gulp-tasks/compile/transpile-ts');
require('./gulp-tasks/qa/lint-ts');
require('./gulp-tasks/qa/jest-test')
require('./gulp-tasks/qa/jest-coverage');

/*
  If we need multiple steps to accomplish a single task,
  these merged tasks should be created under this comment.
*/

// Lint and test
gulp.task('test', gulp.series('lint', 'jest'));
// Lint, test and create coverage report
gulp.task('coverage', gulp.series('lint', 'jest-coverage'));
// Build task that cleans output and compiles
gulp.task('build', gulp.series('test', 'clean', 'compile-ts'));
