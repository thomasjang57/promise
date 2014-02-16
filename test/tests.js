var adapter = require('./adapter'),
  assert = require('assert');

describe('Promises/A+ Tests', function () {
  require('promises-aplus-tests').mocha(adapter);
});

describe('ES6 Promises Tests', function() {
  require('./es6');
});
