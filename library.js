//--------------------------map function---------------------------------

const map = function( list,mapper ) {
  let mappedList = [];
  for( let item of list ) {
    mappedList.push( mapper( item ) );
  }
  return mappedList;
}

exports.map = map;

//---------------------------filter function-------------------------------------

const filter = function( list,predicate ) {
  let filteredList = [];
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
  let result = list[0];
  for( let index = 1; index < list.length; index++ ) {
    result = reducer(result,list[index]);
  }
  return result;
}

exports.reduce = reduce;
