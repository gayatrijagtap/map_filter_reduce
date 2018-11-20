const assert = require('assert');
const mapLengths = require('../arrayLibBuiltin.js').mapLengths;
assert.deepEqual(mapLengths(["ab","a","gayatri"]),[2,1,7]);
assert.deepEqual(mapLengths(["ab","abcdef"]),[2,6]);
assert.deepEqual(mapLengths(["prajakta","pallavi"]),[8,7]);
assert.deepEqual(mapLengths(["a","b","c","d"]),[1,1,1,1]);
assert.deepEqual(mapLengths(["abcdefghi"]),[9]);
