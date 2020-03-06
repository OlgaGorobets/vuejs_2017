var gulp       = require('gulp');  
var less       = require('gulp-less');  
var watch      = require('gulp-watch');  
var minifyCSS  = require('gulp-minify-css');   
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');




gulp.task('compile-less', function() {  
  gulp.src('./app/less/**/*.less')
    .pipe(less())    
    .pipe(gulp.dest('./app/css/'));
});
gulp.task('minify-css', function() {  
	gulp.src(['./app/js/**/*.css', './app/css/*.css'])
    .pipe(minifyCSS())
	.pipe(concat('main.min.css'))
    .pipe(gulp.dest( './css/' ));
});
gulp.task('minify-js', function() {  
	gulp.src(['./app/js/lib/**/*.js', './app/js/*.js'])
    .pipe(uglify())
	.pipe(concat('main.min.js'))
    .pipe(gulp.dest( './js/' ));
}); 


gulp.task('watch-less', function() {  
  gulp.watch('./app/less/*.less' , ['compile-less', 'minify-css']);
  gulp.watch('./app/js/*.js' , ['minify-js']);
});





gulp.task('build', ['minify-css']);
gulp.task('default', ['compile-less', 'watch-less']);


 
