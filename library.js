const map = function(elements,functionRef) {
  let mappedElements =[];
  for(let index = 0; index < elements.length; index++) {
    mappedElements[ index ] = functionRef( elements[ index ] );
  }
  return mappedElements;
}

exports.map = map;
