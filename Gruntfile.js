/* jslint node: true */

'use strict';	

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		stylus: {
			compile: {
				options: {
					banner: '/*\n' +
							'/* Frontend Boilerplate\n' +
							'*/'
				},				
				files: {
					'assets/css/app.css': 'assets/dev/stylus/app.styl'
				}
			}
		},

		watch: {
			scripts: {
				files: ['assets/css/app.styl'],
				task: ['stylus']
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-stylus');	
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['stylus']);
	grunt.registerTask('watch', ['watch']);

};
