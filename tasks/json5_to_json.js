/*
 * grunt-json5-to-json
 * https://github.com/leader22/grunt-json5-to-json
 *
 * Copyright (c) 2014 leader22
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    var path = require('path');
    var fs = require('fs');
    var chalk = require('chalk');
    var JSON5 = require('json5');

    grunt.registerMultiTask('json5_to_json', 'Convert json5 to json.', function() {
        var kindOf = grunt.util.kindOf;

        var options = this.options({
            encoding: grunt.file.defaultEncoding,
            replacer: null,
            space: 2
        });

        var dest;
        var isExpandedPair;
        var tally = {
            dirs: 0,
            files: 0
        };
        var obj;
        var json;
        var json5;

        this.files.forEach(function(filePair) {
            isExpandedPair = filePair.orig.expand || false;

            filePair.src.forEach(function(src) {
                if (detectDestType(filePair.dest) === 'directory') {
                    dest = (isExpandedPair) ? filePair.dest : unixifyPath(path.join(filePair.dest, src));
                } else {
                    dest = filePair.dest;
                }

                if (grunt.file.isDir(src)) {
                    grunt.verbose.writeln('Creating ' + chalk.cyan(dest));
                    grunt.file.mkdir(dest);

                    tally.dirs++;
                } else {
                    grunt.verbose.writeln('Converting ' + chalk.cyan(src) + ' -> ' + chalk.cyan(dest));
                    json5 = grunt.file.read(src, options.encoding);
                    try {
                      obj = JSON5.parse(json5);
                      json = JSON.stringify(obj, options.replacer, options.space);
                    } catch(e) {
                      grunt.log.error(e);
                      return;
                    }

                    dest = dest.split(path.extname(dest))[0] + '.json';
                    grunt.file.write(dest, json, options.encoding);

                    tally.files++;
                }
            });
        });

        if (tally.dirs) {
            grunt.log.write('Created ' + chalk.cyan(tally.dirs.toString()) + ' directories');
        }

        if (tally.files) {
            grunt.log.write((tally.dirs ? ', converted ' : 'Converted ') + chalk.cyan(tally.files.toString()) + (tally.files === 1 ? ' file' : ' files'));
        }

        grunt.log.writeln();
    });

    var detectDestType = function(dest) {
        if (grunt.util._.endsWith(dest, '/')) {
            return 'directory';
        } else {
            return 'file';
        }
    };

    var unixifyPath = function(filepath) {
        if (process.platform === 'win32') {
            return filepath.replace(/\\/g, '/');
        } else {
            return filepath;
        }
    };
};
