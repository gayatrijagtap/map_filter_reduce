const { map } = require('./library.js');

const square = function( element ) {
  return element*element;
}

const isEven = function( element ) {
  return element%2 == 0;
}


const isOdd = function( element ) {
  return element%2 != 0;
}

const add = function(firstNum,secondNum) {
  return firstNum+secondNum;
}

const max = function(firstNum,secondNum) {
  if(firstNum>secondNum)
    return firstNum;
  return secondNum;
}

const cube = function(element) {
  return element*element*element;
}

const isAscending = function(list) {
  let state = { prevState : true , prevElement : list[0] };

  const isGreater = function(state,currentElement) {
    let { prevState,prevElement } = state;
    state.prevState = (prevElement <= currentElement) && prevState;
    state.prevElement = currentElement;
    return state;
  }
  let result = reduce(list,isGreater,state);
  return result.prevState;
}

exports.square = square;
exports.isEven = isEven;
exports.isOdd = isOdd;
exports.add = add;
exports.max = max;
exports.cube = cube;
exports.isAscending = isAscending;
