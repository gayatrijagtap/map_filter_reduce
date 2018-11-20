const assert = require('assert');
const findNumBelowThreshold=require('../arrayLibBuiltin.js').findNumBelowThreshold;
assert.equal(findNumBelowThreshold([1,2,3,4],2),1);
assert.equal(findNumBelowThreshold([1,2,3,4],3),2);
assert.equal(findNumBelowThreshold([-1,-2,-3,-4],-4),0);
assert.equal(findNumBelowThreshold([1],1),0);
assert.equal(findNumBelowThreshold([1,2,3,5,6,7,8,9,4],5),4);
