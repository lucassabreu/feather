module.exports = function(grunt) {

  grunt.initConfig({
    webfont: {
      icons: {
        src: 'icons/core/*.svg',
        dest: 'dist/fonts',
        options: {
          font: 'feather',
          fontFamilyName: 'Feather',
          ligatures: true,
          syntax: 'bootstrap',
          styles: 'font',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont']);
};

