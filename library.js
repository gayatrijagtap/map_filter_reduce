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
  let result = elements[0];
  let index = 1;
  if(accumulator) {
    result = accumulator;
    index = 0;
  }
  while ( index < elements.length ) {
    result = functionRef(result,elements[index]);
    index++;
  }
  return result;
}

exports.reduce = reduce;
