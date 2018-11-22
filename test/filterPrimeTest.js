const assert = require('assert');
const { filterPrime } = require('../library.js');
const { isEven } = require('../utilityFun.js');
const { isOdd } = require('../utilityFun.js');

describe( 'filterPrime' , function() {
  it( 'should return filterPrimeed array of same length for array with multiple elements' , function() {
    assert.deepEqual(filterPrime([1,2,3,4,5],isEven),[2,4]);
    assert.deepEqual(filterPrime([1,2,3],isEven),[2]);
    assert.deepEqual(filterPrime([1,2,3],isOdd),[1,3]);
    assert.deepEqual(filterPrime([1,2,3,4,5],isOdd),[1,3,5]);
  })

  it( 'should return empty array when empty array is given as an input' , function() {
    assert.deepEqual(filterPrime([],isEven),[]);
    assert.deepEqual(filterPrime([],isOdd),[]);
  });

  it( 'should return empty array for all falsie filterPrimes' , function() {
    assert.deepEqual(filterPrime([1,3,5],isEven),[]);
    assert.deepEqual(filterPrime([2,4],isOdd),[]);
  });

  it( 'should return all the elements when all the filterPrimes are truthy' , function() {
    assert.deepEqual(filterPrime([2,4,6],isEven),[2,4,6]);
    assert.deepEqual(filterPrime([1,3,5],isOdd),[1,3,5]);
  });

})
