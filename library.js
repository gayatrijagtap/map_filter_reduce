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
  let items = list;
  if(accumulator != undefined) {
    items.unshift(accumulator);
  }
  let result = items.shift();
  for( let item of items ) {
    result = reducer(result,item);
  }
  return result;
}

exports.reduce = reduce;

//--------------------------------mapPrime function----------------------------------

const mapPrime = function( list,mapper ) {
  return reduce( list,reducerForMapGen( mapper ),[] );
}

const reducerForMapGen = function( mapper ) {
  return function( accumulator,item ) {
    accumulator.push( mapper( item ) );
    return accumulator;
  }
}

exports.mapPrime = mapPrime;

//----------------------------------filterPrime function-----------------------------=

const filterPrime = function( list,predicate ) {
  return reduce( list,reducerForFilterGen( predicate ),[] );
}

const reducerForFilterGen = function( predicate ) {
  return function( accumulator,item ) {
    if( predicate( item ) ) {
      accumulator.push( item );
    }
      return accumulator;
  }
}

exports.filterPrime = filterPrime;
