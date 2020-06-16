const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create(); 

//compile scss to css

function style() {
    //1 where is my css file
    return gulp.src('./scss/**/*.scss')
    //2 pass scss compiler
    .pipe(sass())
    //3 where t save css
    .pipe(gulp.dest('./css'));
}

exports.style = style;