module.exports = function( grunt ) {

  // Load grunt tasks
  require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

  // Configure grunt
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      main: {
        src: [ 'build/simulator.js' ]
      }
    },

    preprocess: {
      main: {
        files: {
          expand: true,
          cwd: 'source/js/',
          src: 'wrapper.js',
          dest: 'build/'
        }
      },
      plain: {
        src: 'source/js/wrapper.js',
        dest: 'build/simulator.js'
      }
    }

  });

  // Set up grunt tasks

  grunt.registerTask( 'default', [ 'preprocess', 'jshint' ] );

};