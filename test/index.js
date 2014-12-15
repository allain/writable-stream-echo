var assert = require('chai').assert,
    WritableStreamEcho = require('..'),
    StreamArray = require('stream-array'),
    WritableCounter = require('writable-counter');



describe('writable-stream-echo', function() {
  it('supports', function(done) {
    var stream = StreamArray(["A", "B", "C"]);

    var inlineCounter = WritableCounter();
    var tailCounter = WritableCounter();

    stream.pipe(WritableStreamEcho(inlineCounter)).pipe(tailCounter).on('finish', function(err) {
      assert.equal(3, inlineCounter.count);
      assert.equal(3, tailCounter.count);
      done();
    });
  });
});
