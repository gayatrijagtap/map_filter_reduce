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

//--------------------------------mapPrime function----------------------------------

const mapPrime = function(list,mapper) {
  return reduce(list,reducerGenerator(mapper),[]);
}

const reducerGenerator = function(mapper) {
  return function(accumulator,element) {
    accumulator.push(mapper(element));
    return accumulator;
  }
}

exports.mapPrime = mapPrime;
