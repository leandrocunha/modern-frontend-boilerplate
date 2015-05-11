/* jslint node: true */

'use strict';	

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: 'node_modules/nib/',
						src: ['index.styl', 'lib/**'],
						dest: 'assets/css/nib'
					}
				]
			},
		},

		stylus: {
			compile: {
				options: {
					banner: '/*\n' +
									'Frontend Boilerplate\n' +
									'*/'
				},				
				files: {
					'style.css': 'assets/css/app.styl'
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
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-stylus');	
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['copy', 'stylus']);
	grunt.registerTask('watch', ['watch']);

};
