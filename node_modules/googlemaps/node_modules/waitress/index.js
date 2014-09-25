"use strict";

var waitress = function(count, cb) {
  if (count === 0) {
    process.nextTick(function() {
      cb(null, []);
    });
    return function() {};
  }

  var done = 0
    , cberr = null
    , results = []
    ;

  var next = function(err, result) {
    done += 1;
    if (err) cberr = err;
    if (result !== undefined) {
      results.push(result);
    }
    if (done === count) {
      cb(cberr, results);
    }
  };

  return next;
};

module.exports = waitress;
