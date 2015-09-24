var gulp     = require('gulp');
var mocha    = require('gulp-mocha');
var eslint   = require('gulp-eslint');
var coverage = require('gulp-coverage');

gulp.task('test', function test() {
  return gulp
    .src(['index.js', 'lib/**/*.js', 'test/**/*.test.js'], { read: false })
    .pipe(coverage.instrument({
      pattern: ['index.js', 'lib/**/*.js'],
      debugDirectory: 'dist/debug'
    }))
    .pipe(mocha())
    .pipe(coverage.gather())
    .pipe(coverage.format([
      { reporter: 'html', outFile: 'coverage.html' },
      { reporter: 'json', outFile: 'coverage.json' }
    ]))
    .pipe(gulp.dest('dist/coverage'))
  ;
});

gulp.task('lint', function lint() {
  return gulp
    .src(['lib/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
  ;
});

gulp.task('default', ['lint', 'test']);