const assert = require('assert');
const countOdds = require('../arrayLibBuiltin.js').countOdds;
assert.equal(countOdds([1,2,3,4,5,6,7,8,9]),5);
assert.equal(countOdds([1,2,3]),2);
assert.equal(countOdds([1]),1);
assert.equal(countOdds([1,2,6,7,8,9]),3);
assert.equal(countOdds([1,2,9,11,15]),4);
