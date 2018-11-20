const assert = require('assert');
const selectAlternates = require('../arrayLibBuiltin.js').selectAlternates;
assert.deepEqual(selectAlternates([2,3,4]),[2,4]);
assert.deepEqual(selectAlternates([0,2,4,6]),[0,4]);
assert.deepEqual(selectAlternates([1,2,3,4,5,6]),[1,3,5]);
assert.deepEqual(selectAlternates([9,8,7,6,5,4]),[9,7,5]);
assert.deepEqual(selectAlternates([5,3,8]),[5,8]);
