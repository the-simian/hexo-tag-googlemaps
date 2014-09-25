var waitress = require('./index')
  , assert = require('assert');

describe('waitress', function() {
  it('should recieve an error', function() {
    assert.throws(function() {
      var done = waitress(3, function(err) {
        if (err) throw err;
      });

      done();
      done();
      done(new Error);
    });
  });

  it('should receive error from single callback', function() {
    assert.throws(function() {
      var done = waitress(1, function(err) {
        if (err) throw err;
      });

      done(new Error('hai tai mai shu'));
    }, /hai tai mai shu/);
  });

  it('should execute cb with zero count', function(next) {
    // for zero args
    var done = waitress(0, function(err, arr) {
      assert.ok(!err);
      assert.deepEqual(arr, []);
      next();
    });
  });

  it('should ignore false error param', function() {
    assert.doesNotThrow(function() {
      var done = waitress(3, function(err) {
        if (err) throw err;
      });

      done();
      done();
      done();
      done(false);
    });
  });

  it('should return last error', function() {
    assert.throws(function() {
      var done = waitress(3, function(err, results) {
        if (err) throw err;
      });

      done();
      done(new Error("nein nein nein"));
      done(new Error("no no no"));
    }, /no no no/);
  });

  it('should aggregate results', function() {
    (function() {
      var done = waitress(3, function(err, results) {
        if (err) throw err;
        assert.deepEqual(results, [1, 2, 3], "results aggregation wrong");
      });

      done(null, 1);
      done(null, 2);
      done(null, 3);
      done(null, 4);
    })();
  });

});
