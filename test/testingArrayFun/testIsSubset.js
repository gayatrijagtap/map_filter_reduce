const assert = require('assert');
const isSubset = require('../arrayLibBuiltin.js').isSubset;
assert.deepEqual(isSubset([1,2],[1,2,3,4]),true);
assert.deepEqual(isSubset([1,2],[1,3,4]),false);
assert.deepEqual(isSubset([2,3,1,4],[1,2,3,4]),true);
assert.deepEqual(isSubset([],[1,2,3,4]),true);
assert.deepEqual(isSubset([2,6,7],[2,6,8]),false);
