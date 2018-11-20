const assert = require('assert');
const average = require('../arrayLibBuiltin.js').findAverage;
assert.equal(average([1,2,3]),2);
assert.equal(average([15,15,15]),15);
assert.equal(average([5,10,15]),10);
assert.equal(average([3,5,4]),4);
assert.equal(average([2.5,1,2.5]),2);
