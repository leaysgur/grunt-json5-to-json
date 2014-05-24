/*
 * grunt-json5-to-json
 * https://github.com/leader22/grunt-json5-to-json
 *
 * Copyright (c) 2014 leader22
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    json5_to_json: {
      options: {
        replacer: null,
        space: 4
      },
      case1: {
        src: 'test/sample.json5',
        dest: 'tmp/sample.json'
      },
      case2: {
        options: {
          space: 2
        },
        src: ['test/**/*.json5'],
        dest: 'tmp/all/'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'json5_to_json']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
