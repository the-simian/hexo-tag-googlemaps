[![browser support](http://ci.testling.com/ifit/waitress.png)](http://ci.testling.com/ifit/waitress)

### Basic Usage

```javascript
var done = waitress(count, cb);
```

Waitress returns a function, `done`, that will wait to be called `count` times before executing the `cb` passed into it.

```javascript
var done = waitress(3, function(err) {
  if (err) throw err;
});

done();
done(new Error('oh noes')); // causes callback to be fired with an error condition
done(false); // also causes callback to be fired with an error condition
```

### Getting results

If done receives a second parameter, waitress will add that to an array,
which will be the second parameter given to the callback, as long as it
receives no errors.

The array will be built in the order the data is received, not the order
done appears in your code.

```javascript
var done = waitress(3, function(err, result) {
  if (err) throw err;
  result === ['a', 'b', 'c'];
});

done(null, 'a');
done(null, 'b');
done(null, 'c');
```
