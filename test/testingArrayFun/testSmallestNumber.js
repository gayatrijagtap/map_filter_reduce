const assert=require('assert');
const smallestNum = require('../arrayLibBuiltin.js').findSmallestNumber;
assert.equal(smallestNum([1,2,3]),1);
assert.equal(smallestNum([-1,3,7,8]),-1);
assert.equal(smallestNum([-1,-2,-3,-4]),-4);
assert.equal(smallestNum([22,33,44,55]),22);
assert.equal(smallestNum([1,-2,-3]),-3);
