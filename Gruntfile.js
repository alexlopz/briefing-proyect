module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public/'
        }
      }
    },
    watch: {
      project: {
        files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json', 'public/**/*.css'],
        options: {
          livereload: true
        }
      }
    },
    imagemin: {

    main: {

      files: [{
        expand: true,
        cwd: '/img/logos',
        src: ['**/*.{png,jpg,gif,.svg}'],
        dest: '/img/comp'
      }]

      }

    }//imagemin


  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  grunt.registerTask('default', ['connect', 'watch','imagemin']);

};
