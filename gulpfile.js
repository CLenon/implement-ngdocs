var gulp  = require('gulp');

gulp.task('ngdocs', [], function() {
    var gulpDocs = require('gulp-ngdocs');
    var options = {    	
    	html5Mode: false,
    	startPage: '/api/module.app',
    	title: "CRMX2.0",
    };
    return gulp
    	.src('app/*.js')
    	.pipe(gulpDocs.process(options))
    	.pipe(gulp.dest('./docs'))
});

gulp.task('default', ['ngdocs']);