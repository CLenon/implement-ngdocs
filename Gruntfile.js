module.exports = function(grunt){

	grunt.initConfig({
		ngdocs: {
			all: ['app/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-ngdocs');	
}