const assert = require('assert');
const partition = require('../arrayLibBuiltin.js').partition;
assert.deepEqual(partition([1,2,3,4,5],1),[ [ ], [1, 2, 3, 4, 5 ] ]);
assert.deepEqual(partition([1,2,3,4,5],3),[ [ 1, 2 ], [ 3, 4, 5 ] ]);
assert.deepEqual(partition([1,2,3,4,5],4),[ [ 1, 2, 3 ], [ 4, 5 ] ]);
assert.deepEqual(partition([1,2,3,4,5],5),[ [ 1, 2, 3, 4 ], [ 5 ] ]);
