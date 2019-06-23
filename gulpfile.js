const gulp = require( 'gulp' );

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const precss = require('precss');
const sourcemaps = require( 'gulp-sourcemaps' );


gulp.task('default', () => {
  return gulp.src('styles/src/common.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ precss, autoprefixer ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('build/') )
});
