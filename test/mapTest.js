const assert = require('assert');
const { map } = require('../library.js');
const { square } = require('../utilityFun.js');
const { cube } = require('../utilityFun.js');

describe( 'map' , function() {
  describe( 'square' , function () {
    it( 'should square the positive integers' , function() {
      assert.deepEqual(map([1,2,3,4,5],square),[1,4,9,16,25]);
      assert.deepEqual(map([2,4,6],square),[4,16,36]);
    });
    it( 'should square the negative integers' , function () {
      assert.deepEqual(map([-1],square),[1]);
    });
    it( 'should work for the empty array' , function () {
      assert.deepEqual(map([],square),[]);
    });
  })

  describe ( 'cube' , function () {
    it( 'should cube the positive integers' , function() {
      assert.deepEqual(map([1,2,3],cube),[1,8,27]);
      assert.deepEqual(map([1],cube),[1]);
    });
    it( 'should cube the negative integers' , function() {
      assert.deepEqual(map([-1],cube),[-1]);
    });
    it( 'should work for the empty array' , function() {
      assert.deepEqual(map([],cube),[]);
    });
  })
})
