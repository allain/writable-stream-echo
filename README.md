# writable-stream-echo

Turns a Writeable stream into a Transform one that re-emits written data after it's been processed.

[![build status](https://secure.travis-ci.org/allain/writable-stream-echo.png)](http://travis-ci.org/allain/writable-stream-echo)

## Installation

This module is installed via npm:

``` bash
$ npm install writable-stream-echo
```

## Testing

Test can be run by executing:

``` bash
$ grunt test
```

## Example Usage

``` js
var WritableStreamEcho = require('writable-stream-echo');
var StreamArray = require('stream-array'),
var WritableCounter = require('writable-counter');
var stdout = require('stdout');

var stream = StreamArray(['A', 'B', 'C']);

var counter = WritableCounter();

// note that stdout() is a writable stream and woudln't support piping further
// unless we echoed its received data
.pipe(WritableStreamEcho(stdout()))
.pipe(counter).on('finish', function(err) {
  console.log(counter.count); // Should output 3
});

```
