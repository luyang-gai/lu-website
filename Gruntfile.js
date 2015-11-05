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
      server: {
        options: {
          livereload: true,
          port: 8000,
          base: 'app'
        },
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['app/index.html',
                'app/js/**/*.html']
      },
      sass: {
        options: {
          livereload: false,
        },
        files: ['app/css/app.scss'],
        tasks: ['sass'],
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('serve', [
    'sass',
    'connect',
    'watch'
  ]);

};
