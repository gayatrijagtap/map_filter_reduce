const assert = require('assert');
const countEvens = require('../arrayLibBuiltin.js').countEvens;
assert.equal(countEvens([1,2,3,4,5,6,7,8,9]),4);
assert.equal(countEvens([1,2,3]),1);
assert.equal(countEvens([1]),0);
assert.equal(countEvens([1,2,6,7,8,9]),3);
assert.equal(countEvens([1,2,9,11,15]),1);
