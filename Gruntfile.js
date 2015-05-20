/* jslint node: true */

'use strict';	

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		htmlmin: {
			dist: {
				options: {
		        	removeComments: true,
		        	collapseWhitespace: true
		      	},	
		      	files: {
		        	'dist/index.html': 'index.html'
		      	}
		    }
		},

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

		imagemin: {
			static: {
				options: {
					optimizationLevel: 3
				},
				files: {
					'dist/img/gracie-jiu-jitsu.jpg': 'assets/img/gracie-jiu-jitsu.jpg'
				}
			}
		},

		watch: {
			scripts: {
				files: ['assets/dev/stylus/app.styl'],
				tasks: ['stylus']
			}
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-stylus');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s).
	grunt.registerTask('default', ['stylus', 'watch']);
	grunt.registerTask('build', ['htmlmin', 'imagemin']);

};
