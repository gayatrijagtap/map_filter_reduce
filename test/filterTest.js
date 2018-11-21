const assert = require('assert');
const { filter } = require('../library.js');
const { isEven } = require('../utilityFun.js');
const { isOdd } = require('../utilityFun.js');

describe( 'filter' , function() {
  describe( 'isEven' , function () {
    it( 'should give an array of even numbers' , function() {
      assert.deepEqual(filter([1,2,3,4,5],isEven),[2,4]);
      assert.deepEqual(filter([1,2,3],isEven),[2]);
    })
    it( 'should work for empty output' , function() {
      assert.deepEqual(filter([1,3,5],isEven),[]);
      assert.deepEqual(filter([],isEven),[]);
    });
  })

  describe( 'isOdd' , function() {
    it( 'should give an array of odd numbers' , function() {
      assert.deepEqual(filter([1,2,3],isOdd),[1,3]);
      assert.deepEqual(filter([1,2,3,4,5],isOdd),[1,3,5]);
    });
    it( 'should work for empty output' , function() {
      assert.deepEqual(filter([],isOdd),[]);
      assert.deepEqual(filter([2,4],isOdd),[]);
    });
  })
})
