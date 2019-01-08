/**
 * Load modules
 */
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const clean = require('gulp-clean');

/**
 * Custom error function for Plumber.
 *
 * @param err
 */
let onError = function (err) {
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
gulp.task('minify', () => {
    return gulp.src('./css/imagehover.css')
        .pipe(cssnano())
		.pipe(rename('imagehover.min.css'))
        .pipe(gulp.dest('./css'));
});

/**
 * Build task
 */
gulp.task('build', () => {
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
 * Clean dist directory
 */
gulp.task('clean', () => {
    return gulp.src('./css/imagehover*.css*', {read: false})
        .pipe(clean({force: true}));
});

/**
 * Auto prefix CSS
 */
gulp.task('autoprefixer', () => {
    return gulp.src('./css/imagehover.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({browsers: ['last 1 version']}) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css/'));
});

/**
 * Gulp watch task
 */
gulp.task('watch', () => {
    // Watch SCSS files for changes
    gulp.watch(
        ['scss/**/*.scss'],
        ['default']
    );
});

/**
 * Default Gulp task
 *
 * Build then watch SCSS files.
 *
 */
gulp.task('default', ['clean', 'build', 'autoprefixer', 'minify']);
