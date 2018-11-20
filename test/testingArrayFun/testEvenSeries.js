const assert = require('assert');
let selectEvens = require('../arrayLibBuiltin.js').selectEvens;

let numbers = [1,2,3,4,5];
assert.deepEqual(selectEvens(numbers),[2,4]);
assert.deepEqual(selectEvens([3,2]),[2]);
assert.deepEqual(selectEvens([6,4,2]),[6,4,2]);
assert.deepEqual(selectEvens([0,1,2,3,4]),[0,2,4]);
