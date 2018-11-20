const assert = require('assert');
const isAscending=require('../arrayLibBuiltin.js').isAscending;
assert.equal(isAscending([1,2,3,4,5]),true);
assert.equal(isAscending([1,2,4,3,8]),false);
assert.equal(isAscending([0,3,6,8,9]),true);
assert.equal(isAscending([-1,2,4,-2,9]),false);
assert.equal(isAscending([12,23,34,45,56]),true);
