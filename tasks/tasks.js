const gulp = require('gulp');

// Import all our tasks
require('./gulp-tasks/misc/task-clean');
require('./gulp-tasks/compile/transpile-ts');
require('./gulp-tasks/qa/lint-ts');

/*
  If we need multiple steps to accomplish a single task,
  these merged tasks should be created under this comment.
*/

// Build task that cleans output and compiles
gulp.task('build', gulp.series('clean', 'compile-ts'));
