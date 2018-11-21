//--------------------------map function---------------------------------

const map = function( list,mapper ) {
  let mappedList = new Array();
  for( let item of list ) {
    mappedList.push( mapper( item ) );
  }
  return mappedList;
}

exports.map = map;

//---------------------------filter function-------------------------------------

const filter = function( list,predicate ) {
  let filteredList = new Array();
  for( let item of list ) {
    if( predicate(item )) { 
      filteredList.push( item );
    }
  }
  return filteredList;
}

exports.filter = filter;

//------------------------------reduce function-------------------------------------

const reduce = function(list,reducer,accumulator) {
  if(accumulator != undefined) {
    list.unshift(accumulator);
  }
  let result = list.shift();
  for( let item of list ) {
    result = reducer(result,item);
  }
  return result;
}

exports.reduce = reduce;
