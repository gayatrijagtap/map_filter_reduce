const assert = require('assert');
const { mapPrime } = require('../library.js');
const { square } = require('../utilityFun.js');
const { cube } = require('../utilityFun.js');

describe( 'mapPrime' , function() {

  it( 'should return array with same no of elements when mapPrimeped with array of multiple elements' , function() {
    assert.deepEqual(mapPrime([1,2,3,4,5],square),[1,4,9,16,25]);
    assert.deepEqual(mapPrime([1,2,3],cube),[1,8,27]);
  });

  it( 'should return single element when mapPrimeped with array of single element' , function() {
    assert.deepEqual(mapPrime([2],square),[4]);
    assert.deepEqual(mapPrime([1],cube),[1]);
  });

  it( 'should return mapPrimeped array when array with negative elements is passed' , function () {
    assert.deepEqual(mapPrime([-1],square),[1]);
    assert.deepEqual(mapPrime([-1],cube),[-1]);
  });

  it( 'should give an empty array when empty array is given as an input' , function () {
    assert.deepEqual(mapPrime([],square),[]);
    assert.deepEqual(mapPrime([],cube),[]);
  });

})
