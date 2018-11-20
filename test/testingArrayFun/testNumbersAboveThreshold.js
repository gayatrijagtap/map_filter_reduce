const assert = require('assert');
const findNumAboveThreshold=require('../arrayLibBuiltin.js').findNumAboveThreshold;
assert.equal(findNumAboveThreshold([1,2,3,4],2),2);
assert.equal(findNumAboveThreshold([1,2,3,4],3),1);
assert.equal(findNumAboveThreshold([-1,-2,-3,-4],-4),3);
assert.equal(findNumAboveThreshold([1],1),0);
assert.equal(findNumAboveThreshold([1,2,3,5,6,7,8,9],5),4);
