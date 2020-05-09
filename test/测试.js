var assert = require('assert');
var 演示 = require("../入口")

describe('取笔顺', function() {
  describe('', function() {
    it('无', function() {
      assert.strictEqual(演示.取笔顺("㐀"), null);
    });
    it('有', function() {
      assert.strictEqual(演示.取笔顺("一"), "1");
    });
  });
});
