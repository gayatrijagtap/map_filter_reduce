const assert=require('assert');
const greatestNum = require('../arrayLibBuiltin.js').findGreatestNumber;
assert.equal(greatestNum([1,2,3]),3);
assert.equal(greatestNum([-1,3,7,8]),8);
assert.equal(greatestNum([-1,-2,-3,-4]),-1);
assert.equal(greatestNum([22,33,44,55]),55);
assert.equal(greatestNum([1,-2,-3]),1);
