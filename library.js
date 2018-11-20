const map = function(elements,functionRef) {
  let mappedElements =[];
  for(let index = 0; index < elements.length; index++) {
    mappedElements[ index ] = functionRef( elements[ index ] );
  }
  return mappedElements;
}

exports.map = map;

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
