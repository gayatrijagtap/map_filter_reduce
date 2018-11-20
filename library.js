//--------------------------map function---------------------------------

const map = function(elements,functionRef) {
  let mappedElements =[];
  for(let index = 0; index < elements.length; index++) {
    mappedElements[ index ] = functionRef( elements[ index ] );
  }
  return mappedElements;
}

exports.map = map;

//---------------------------filter function-------------------------------

const filter = function(elements,functionRef) {
  let mappedElements = [];
  for(let index = 0; index < elements.length; index++) {
    if(functionRef(elements[ index ]) != false || functionRef(elements[ index ]) != 0) {
      mappedElements.push( elements[index] );
    }
  }
  return mappedElements;
}

exports.filter = filter;

//------------------------------reduce function---------------------------------

const reduce = function(elements,functionRef,accumulator) {
  let result;
  if(accumulator) {
    result = functionRef(accumulator,elements[0]);
    for(let index = 1; index < elements.length; index++) {
      result = functionRef(result,elements[index]);
    }
    return result;
  }
  result = functionRef(elements[0],elements[1]);
  for(let index = 2; index < elements.length; index++) {
    result = functionRef(result,elements[index]);
  }
  return result;
}

exports.reduce = reduce;
