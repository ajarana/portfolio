module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/portfolio.css": "less/portfolio.less",
          "css/blog.css": "less/blog.less",
          "css/footer.css": "less/footer.less",
          "css/header.css": "less/header.less",
          "css/colors.css": "less/colors.less",
          "css/responsive.css": "less/responsive.less",
          "css/normalize.css": "less/normalize.less",
          "css/main.css": "less/main.less"
           // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
