/*
 * grunt-json-schema-to-markdown
 * https://github.com/simplemerchant/grunt-json-schema-to-markdown
 *
 * Copyright (c) 2016 Edward Woodcock
 * Licensed under the MIT license.
 */

'use strict';

var json2Md = require('json-schema-to-markdown');

module.exports = function (grunt) {

  grunt.registerMultiTask('markdown_schema',
    'Grunt tool to convert JSON schema to Markdown documentation',
    function () {

      // Iterate over all specified file groups.
      this.files.forEach(function (f) {
        // Concat specified files.
        var fullMarkdown = f.src.filter(function (filepath) {
          // Warn on and remove invalid source files (if nonull was set).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source schema file "' + filepath +
              '" not found.');
            return false;
          } else {
            return true;
          }
        }).map(function (filepath) {
          // Convert source file to MD.
          grunt.log.debug('Loading file: ' + filepath);
          var sourceFile = grunt.file.read(filepath);
          var fileMd;
          try {
            grunt.log.debug(
              'Converting file to markdown: ' + filepath
            );
            fileMd = json2Md(JSON.parse(sourceFile));
          } catch (e) {
            grunt.fail.warn(e);
          }
          return fileMd || '';
        }).join('\n\n');

        fullMarkdown += '\n';

        // Write the destination file.
        grunt.file.write(f.dest, fullMarkdown);

        // Print a success message.
        grunt.log.writeln('Markdown file "' + f.dest + '" created.');
      });
    });

};
