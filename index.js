var through2 = require('through2');

module.exports = WritableEchoStream;

function WritableEchoStream(writable, options) {
  options = options || {};

  return through2(options, function(chunk, encoding, callback) {
    writable.write(chunk, encoding, function(err) {
      callback(err, chunk);
    });
  });

}
