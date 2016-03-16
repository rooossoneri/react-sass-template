var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		react        = require('gulp-react'),
	  babel 			 = require('gulp-babel')
		// uglify       = require('gulp-uglifyjs');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	// .pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	// .pipe(minifycss())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/**/*.js', ['react']);
	gulp.watch('app/js/**/*.js', ['babel']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
	gulp.watch('app/build/*.js').on("change", browserSync.reload);
	gulp.watch('app/build/*.js').on("change", browserSync.reload);
});

gulp.task('react', function () {
	return gulp.src('template.jsx')
		.pipe(react())
		.pipe(gulp.dest('dist'));
});

gulp.task('babel',function() {
	return gulp.src('app/js/react/*.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./app/build/'));
});

gulp.task('default', ['browser-sync', 'watch', 'react', 'babel']);
