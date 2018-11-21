const assert = require('assert');
const { filter } = require('../library.js');
const { isEven } = require('../utilityFun.js');
const { isOdd } = require('../utilityFun.js');

describe( 'filter' , function() {
  it( 'should filter for array with multiple elements' , function() {
    assert.deepEqual(filter([1,2,3,4,5],isEven),[2,4]);
    assert.deepEqual(filter([1,2,3],isEven),[2]);
    assert.deepEqual(filter([1,2,3],isOdd),[1,3]);
    assert.deepEqual(filter([1,2,3,4,5],isOdd),[1,3,5]);
  })

  it( 'should return empty array when empty array is given as an input' , function() {
    assert.deepEqual(filter([],isEven),[]);
    assert.deepEqual(filter([],isOdd),[]);
  });

  it( 'should return empty array for all falsie filters' , function() {
    assert.deepEqual(filter([1,3,5],isEven),[]);
    assert.deepEqual(filter([2,4],isOdd),[]);
  });

  it( 'should return all the elements when all the filters are truthy' , function() {
    assert.deepEqual(filter([2,4,6],isEven),[2,4,6]);
    assert.deepEqual(filter([1,3,5],isOdd),[1,3,5]);
  });

})
