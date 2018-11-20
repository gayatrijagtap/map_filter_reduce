const assert = require('assert');
let selectOdds = require('../arrayLibBuiltin.js').selectOdds;

let numbers = [1,2,3,4,5];
assert.deepEqual(selectOdds(numbers),[1,3,5]);
assert.deepEqual(selectOdds([3,2]),[3]);
assert.deepEqual(selectOdds([6,4,2]),[]);
assert.deepEqual(selectOdds([0,1,2,3,4]),[1,3]);
