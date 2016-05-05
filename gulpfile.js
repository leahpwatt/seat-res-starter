var gulp = require("gulp");
var browsersync = require("browser-sync").create();
var stylus = require("gulp-stylus");
var jshint = require('gulp-jshint');

//JS Hint
gulp.task('lint', function() {
  return gulp.src('*.js') 
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Stylus
gulp.task("gulp-stylus", function() {
	return gulp.src("more_styles.styl")
		.pipe(stylus())
		.pipe(gulp.dest("css"))
});

//Browser Sync
gulp.task("browser-sync", function() {
	browsersync.init({
		server: {
			baseDir: "./"
		}
	});
gulp.watch(["*.html", "./css/*.css", '*.js']).on('change', browsersync.reload);
});


