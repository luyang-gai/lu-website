module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/<%= pkg.name %>.js',
        dest: 'app/<%= pkg.name %>.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {                         // Dictionary of files
          'app/css/app.css': 'app/css/app.scss'
        }
      }
    },
    connect: {
      example: {
        port: 8000,
        base: 'app',
        keepalive: true,
        livereload: true
      }
    },
    watch: {
      scripts: {
        files: ['app/css/app.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'connect:example']);

};
