const assert = require('assert');
const { filter } = require('../library.js');
const { isEven } = require('../utilityFun.js');
const { isOdd } = require('../utilityFun.js');

assert.deepEqual(filter([1,2,3,4,5],isEven),[2,4]);
assert.deepEqual(filter([1,2,3],isEven),[2]);
assert.deepEqual(filter([1,2,3],isOdd),[1,3]);
assert.deepEqual(filter([1,2,3,4,5],isOdd),[1,3,5]);
