const assert = require('assert');
const { map } = require('../library.js');
const { square } = require('../utilityFun.js');
const { cube } = require('../utilityFun.js');

describe( 'map' , function() {

  it( 'should map positive integers' , function() {
    assert.deepEqual(map([1,2,3,4,5],square),[1,4,9,16,25]);
    assert.deepEqual(map([2,4,6],square),[4,16,36]);
    assert.deepEqual(map([1,2,3],cube),[1,8,27]);
    assert.deepEqual(map([1],cube),[1]);
  });

  it( 'should map negative integers' , function () {
    assert.deepEqual(map([-1],square),[1]);
    assert.deepEqual(map([-1],cube),[-1]);
  });

  it( 'should give an empty array when empty array is given as an input' , function () {
    assert.deepEqual(map([],square),[]);
    assert.deepEqual(map([],cube),[]);
  });

})
