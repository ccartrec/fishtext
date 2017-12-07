var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    del  = require('del');



gulp.task('js', function () {
    gulp.src('app/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('clean', function() {
    return del.sync('build');
});

gulp.task('img', function() {
    return gulp.src('app/img/*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('html', function() {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['clean', 'html', 'sass', 'js', 'img'], function() {});

gulp.task('watch', function () {
    gulp.watch('app/*.*', ['build']);
});