const assert = require('assert');
const sum = require('../arrayLibBuiltin.js').findSum;
assert.equal(sum([1,2,3,4]),10);
assert.equal(sum([1,2,3,4,5,6,7,8,9,10]),55);
assert.equal(sum([2,2]),4);
assert.equal(sum([5,6,7,8]),26);
assert.equal(sum([1,1,1,1]),4);
