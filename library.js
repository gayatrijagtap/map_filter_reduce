//--------------------------map function---------------------------------

const map = function(elements,mapper) {
  let mappedElements =[];
  for(let index = 0; index < elements.length; index++) {
    mappedElements[ index ] = mapper( elements[ index ] );
  }
  return mappedElements;
}

exports.map = map;

//---------------------------filter function-------------------------------

const filter = function(elements,predicate) {
  let filteredElements = [];
  for(let index = 0; index < elements.length; index++) {
    if(predicate(elements[ index ]) != false || predicate(elements[ index ]) != 0) {
      filteredElements.push( elements[index] );
    }
  }
  return filteredElements;
}

exports.filter = filter;

//------------------------------reduce function-------------------------------------

const reduce = function(elements,reducer,accumulator) {
  let result = elements[0];
  let index = 1;
  if(accumulator) {
    result = accumulator;
    index = 0;
  }
  while ( index < elements.length ) {
    result = reducer(result,elements[index]);
    index++;
  }
  return result;
}

exports.reduce = reduce;
