const assert = require('assert');
const { reduce } = require('../library.js');
const { add } = require('../utilityFun.js');
const { max } = require('../utilityFun.js');

describe( 'reduce' , function() {
  describe( 'add' , function() {
    it( 'should give addition of all array elements' , function() {
      assert.equal(reduce([1,2,3,4,5],add),15);
      assert.equal(reduce([1,2],add),3);
    });
    it( 'should work for an accumulator also' , function() {
      assert.equal(reduce([1],add,2),3);
      assert.equal(reduce([1,2,3,4,5],add,2),17);
    });
  })

  describe( 'max' , function() {
    it( 'should give the largest number from the list' , function() { 
      assert.equal(reduce([1,2,3,4,5],max),5);
      assert.equal(reduce([1,2],max),2);
    });
    it( 'should work of an accumulator also' , function() {
      assert.equal(reduce([1,2,3,4,5],max,9),9);
      assert.equal(reduce([1,2],max,9),9);
    });
  })
})
