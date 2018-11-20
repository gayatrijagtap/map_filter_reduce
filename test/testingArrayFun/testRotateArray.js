const assert = require('assert');
const rotate = require('../arrayLibBuiltin.js').rotate;
assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotate([1,2,3,4,5],1),[2,3,4,5,1]);
assert.deepEqual(rotate([1,2,3,4,5],3),[4,5,1,2,3]);
assert.deepEqual(rotate([1,2,3,4,5],4),[5,1,2,3,4]);
assert.deepEqual(rotate([1,2,3,4,5],0),[1,2,3,4,5]);
