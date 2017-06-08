var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task("scss", function() {
	return gulp.src("./scss/*.scss")
			.pipe(sass({outputStyle:'compressed'}))
			.on('error', notify.onError({title: 'Erro ao compilar', message: '<%= error.message %>'}))
			.pipe(gulp.dest("./css"))
});

gulp.task("watch", function() {
	gulp.watch("./scss/*.scss", ['scss'])
});