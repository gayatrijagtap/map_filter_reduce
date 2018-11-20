const assert = require('assert');
const isDescending=require('../arrayLibBuiltin.js').isDescending;
assert.equal(isDescending([5,4,3,2,1]),true);
assert.equal(isDescending([1,2,4,3,8]),false);
assert.equal(isDescending([9,6,4,3,1]),true);
assert.equal(isDescending([-1,2,4,-2,9]),false);
assert.equal(isDescending([98,87,76,65,54]),true);
