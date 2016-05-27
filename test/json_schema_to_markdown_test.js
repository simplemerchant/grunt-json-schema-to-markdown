'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.json_schema_to_markdown = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(2);

    var actual1 = grunt.file.read('tmp/schemas1.md');
    var expected1 = grunt.file.read('test/expected/schemas1.md');
    test.equal(
      actual1,
      expected1,
      'Generated markdown 1 did not match expected'
    );

    var actual2 = grunt.file.read('tmp/schemas2.md');
    var expected2 = grunt.file.read('test/expected/schemas2.md');
    test.equal(
      actual2,
      expected2,
      'Generated markdown 2 did not match expected'
    );

    test.done();
  }
};
