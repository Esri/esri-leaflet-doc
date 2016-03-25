module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      'docs-sass': {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      },
      'docs-js': {
        files: ['src/**/*.js'],
        tasks: ['copy:assemble'],
        options: {
          nospawn: true
        }
      },
      'docs-img': {
        files: ['src/img/**/*'],
        tasks: ['newer:imagemin'],
        options: {
          nospawn: true
        }
      },
      'docs-assemble': {
        files: ['src/**/*.md', 'src/**/*.hbs'],
        tasks: ['assemble:dev'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    },

    connect: {
      docs: {
        options: {
          port: 8001,
          hostname: '0.0.0.0',
          base: './built/',
          open: true
        }
      }
    },

    assemble: {
      options: {
        layout: 'layout.hbs',
        layoutdir: 'src/layouts/',
        partials: 'src/partials/**/*.hbs',
        helpers: ['src/helpers/**/*.js' ]
      },
      dev: {
        options: {
          data: ['data/*.json', 'package.json'],
          assets: 'built/'
        },
        files: [{
          cwd: 'src/pages',
          dest: 'built',
          expand: true,
          src: ['**/*.hbs', '**/*.md']
        }]
      },
      dist: {
        options: {
          data: ['package.json'],
          assets: 'built/'
        },
        files: [{
          cwd: 'src/pages',
          dest: 'built',
          expand: true,
          src: ['**/*.hbs', '**/*.md']
        }]
      }
    },

    copy: {
      assemble: {
        files: [
          { src: 'src/js/script.js', dest: 'built/js/script.js'}
        ]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'built/img'
        }]
      }
    },

    sass: {
      site: {
        files: {
          'built/css/style.css': 'src/scss/style.scss'
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'built',
        repo: 'git@github.com:Esri/esri-leaflet.git'
      },
      src: ['**']
    }
  });

  // Development Tasks
  grunt.registerTask('default', ['docs']);

  // Documentation Site Tasks
  grunt.registerTask('docs', ['newer:assemble:dev', 'sass', 'copy', 'imagemin', 'connect:docs', 'watch']);

  // Documentation Site Tasks
  grunt.registerTask('docs:build', ['newer:assemble:dist', 'sass', 'copy', 'imagemin', 'sass']);

  // Documentation Site Tasks
  grunt.registerTask('docs:deploy', ['docs:build', 'gh-pages']);

  // Require all grunt modules
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});
};
