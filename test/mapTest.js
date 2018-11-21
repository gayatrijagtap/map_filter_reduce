const assert = require('assert');
const { map } = require('../library.js');
const { square } = require('../utilityFun.js');
const { cube } = require('../utilityFun.js');

describe( 'map' , function() {

  it( 'should return array with same no of elements when mapped with array of multiple elements' , function() {
    assert.deepEqual(map([1,2,3,4,5],square),[1,4,9,16,25]);
    assert.deepEqual(map([1,2,3],cube),[1,8,27]);
  });

  it( 'should return single element when mapped with array of single element' , function() {
    assert.deepEqual(map([2],square),[4]);
    assert.deepEqual(map([1],cube),[1]);
  });

  it( 'should return mapped array when array with negative elements is passed' , function () {
    assert.deepEqual(map([-1],square),[1]);
    assert.deepEqual(map([-1],cube),[-1]);
  });

  it( 'should give an empty array when empty array is given as an input' , function () {
    assert.deepEqual(map([],square),[]);
    assert.deepEqual(map([],cube),[]);
  });

})
