const assert = require('assert');
const { reduce } = require('../library.js');
const { add } = require('../utilityFun.js');
const { max } = require('../utilityFun.js');

assert.equal(reduce([1,2,3,4,5],add),15);
assert.equal(reduce([1,2,3,4,5],add,2),17);
assert.equal(reduce([1],add,2),3);
assert.equal(reduce([1,2],add),3);

assert.equal(reduce([1,2,3,4,5],max),5);
assert.equal(reduce([1,2,3,4,5],max,9),9);
assert.equal(reduce([1,2],max,9),9);
assert.equal(reduce([1,2],max),2);
