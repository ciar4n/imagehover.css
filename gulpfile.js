/**
 * Load modules
 */
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const notify = require("gulp-notify");
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Custom error function for Plumber.
 *
 * @param err
 */
let onError = function(err) {
    notify.onError({
        title:    "Error",
        message:  "<%= error %>",
    })(err);
    this.emit('end');
};

/**
 * Plumber options
 *
 * @type {{errorHandler: onError}}
 */
const plumberOptions = {
    errorHandler: onError,
};

/**
 * Gulp minify task
 *
 * Build and minify styles for production/distributed use.
 */
gulp.task('minify', function () {
    gulp.src('scss/imagehover.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
        }).on('error', sass.logError))
        .pipe(rename('imagehover.min.css'))
        .pipe(cssnano({
            safe: true,
            autoprefixer: false,
            convertValues: false,
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('css'));
});

/**
 * Build task
 */
gulp.task('build', function () {
    gulp.src('scss/imagehover.scss')
        .pipe(plumber(plumberOptions))
        .pipe(sourcemaps.init())
        .pipe(sass({
            indentWidth: 4,
            outputStyle: 'expanded',
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('css'));
});

/**
 * Gulp watch task
 */
gulp.task('watch', function () {
    // Watch SCSS files for changes
    gulp.watch(
        ['scss/*.scss'],
        ['build']
    );
});

/**
 * Default Gulp task
 *
 * Build then watch SCSS files.
 *
 */
gulp.task('default', ['build', 'watch']);