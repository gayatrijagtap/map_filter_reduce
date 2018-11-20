const assert = require('assert');
let reverse = require('../arrayLibBuiltin.js').reverse;

let numbers = [1,2,3,4,5];
assert.deepEqual(reverse(numbers),[5,4,3,2,1]);
assert.deepEqual(reverse([3,2]),[2,3]);
assert.deepEqual(reverse([6,4,2]),[2,4,6]);
assert.deepEqual(reverse([0,1,2,3,4]),[4,3,2,1,0]);
assert.deepEqual(reverse(["a","b"]),["b","a"]);
