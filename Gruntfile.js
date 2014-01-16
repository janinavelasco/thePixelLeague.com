module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),   
    compass: {
      dist: {
        files: {
          "public/stylesheets/main.css": "sass/*.sass"
        },
        options: {
          "config": "config.rb"
        }  
      }
    },
    uglify: {
      dist: {
        files: {
          'public/js/main.min.js': [
            'bower_components/jquery/jquery.min.js',
            'bower_components/jquery.lazyload/jquery.lazyload.js',
            'bower_components/jquery.scrollTo/jquery.scrollTo.js',
            'js/*.js'
          ]
        }
      }
    },
    watch: {
      css: {
        files: '**/*.sass',
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      js: {
        files: [ 
          'js/*.js'
        ],
        tasks: ['uglify'],
        options: {
          livereload: true 
        } 
      },
      html: {
        files: 'templates/*.twig',
        tasks: [],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
