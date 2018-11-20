const assert = require('assert');
const zipLists = require('../arrayLibBuiltin.js').zipLists;
assert.deepEqual(zipLists([1,2,3,4],[5,6,7,8]),[ [ 1, 5 ], [ 2, 6 ], [ 3, 7 ], [ 4, 8 ] ]);
assert.deepEqual(zipLists([1,2,3,4],[1,2,3,4]),[ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ] ]);
assert.deepEqual(zipLists([1,1,1,1],[2,2,2,2]),[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]);
assert.deepEqual(zipLists([1,3,4,877],[5,6,7,867]),[ [ 1, 5 ], [ 3, 6 ], [ 4, 7 ], [ 877, 867 ] ]);
assert.deepEqual(zipLists([1,0,3.4,9],[-5,6,7,80]),[ [ 1, -5 ], [ 0, 6 ], [ 3.4, 7 ], [ 9, 80 ] ]);
