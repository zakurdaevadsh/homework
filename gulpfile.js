const stylus = require('gulp-stylus')
const pug = require('gulp-pug')
const gulp = require('gulp')

gulp.task('styles', () => {
  return gulp.src('./src/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build'));
});

gulp.task('template', () => {
	return gulp.src('./src/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('./build'))
})