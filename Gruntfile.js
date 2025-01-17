module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  // Project configuration
  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['> 1%', 'iOS 7']}),
          require('cssnano')()
        ]
      },
      dist: {
        files: {
          'web/css/style.css': 'web/css/style.css'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'web/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      scripts: {
        files: 'src/scss/**/*.scss',
        tasks: 'css'
      }
    }
  });

  // Default tasks
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('default', ['watch']);

};