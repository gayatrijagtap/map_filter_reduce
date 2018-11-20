const assert = require('assert');
const findIndex = require('../arrayLibBuiltin.js').findIndex;
assert.equal(findIndex([1,2,3,4],3),2);
assert.equal(findIndex([1,2,3,4],4),3);
assert.equal(findIndex([1,2,3,4],1),0);
assert.equal(findIndex([1,2,3,4],2),1);
assert.equal(findIndex([1,2,3,4],4),3);
