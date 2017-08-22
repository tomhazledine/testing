// Include gulp
var gulp         = require('gulp');

// Include Our Plugins
var concat       = require('gulp-concat');
var jshint       = require('gulp-jshint');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var uglify       = require('gulp-uglify');
var gutil        = require('gulp-util');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

// This will handle our errors
var onError = function (err) {
    gutil.log(gutil.colors.red(err));
};

// Tests
gulp.task('test', function () {
    return gulp.src('test/runner.html')
    .pipe(mochaPhantomJS());
});

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src('uncompressed/*.js')
    .pipe(plumber({
        errorHandler: onError
    }))
    .pipe(concat('assets/app.js'))
    .pipe(gulp.dest(''))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(''));
});

// Lets lint our JS
gulp.task('jslint', function() {
    return gulp.src('uncompressed/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
