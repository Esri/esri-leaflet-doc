var sass = require('node-sass');

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
        tasks: ['copy:assemble', 'eslint:default'],
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
        tasks: ['assemble:dev', 'eslint:default'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    },

    eslint: {
      default: {
        src: ['src/**/*.js', 'src/**/*.hbs']
      },
      all: {
        src: ['src/**/*.js', 'src/**/*.md', 'src/**/*.hbs']
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
        helpers: ['src/helpers/**/*.js']
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
          data: ['data/secret.json', 'data/siteData.json', 'package.json'],
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
          { src: 'src/js/script.js', dest: 'built/js/script.js' }
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
      options: {
        implementation: sass,
        sourceMap: true
      },
      site: {
        files: {
          'built/css/style.css': 'src/scss/style.scss'
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'built',
        repo: 'https://github.com/Esri/esri-leaflet.git'
      },
      src: ['**']
    }
  });

  // Development Tasks
  grunt.registerTask('default', ['docs']);

  // Documentation Site Tasks
  grunt.registerTask('docs', ['newer:assemble:dev', 'sass', 'copy', 'imagemin', 'connect:docs', 'watch']);

  // Documentation Site Tasks
  grunt.registerTask('docs:build', ['eslint:default', 'newer:assemble:dist', 'sass', 'copy', 'imagemin']);

  // Documentation Site Tasks
  grunt.registerTask('docs:deploy', ['docs:build', 'gh-pages']);

  // Linting
  // Since the JS files inline in our HTML files is a bit weird, the default should be not running it over the HTML
  // files, but you can still run "grunt eslint:all" if you're specifically working on those files and you want a test.
  grunt.registerTask('lint', ['eslint:default']);
  grunt.registerTask('lint:all', ['eslint:all']);

  // Require all grunt modules
  require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'assemble'] });
};
