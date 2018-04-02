//Refactoring to use the only rest operator

/************/
/*** ES5 ***/
/**********/
function unshift(array, a,b,c,d,e){
  return [a,b,c,d,e].concat(array);
}

console.log(unshift([111], 2,3,4,5,6)); //OUTPUT: [ 111, 2, 3, 4, 5, 6 ]

/************/
/*** ES5 ***/
/**********/
function unshift(array, ...numbers){
  return [...array, ...numbers];
}
console.log(unshift([111], 2,3,4,5,6)); //OUTPUT: [ 111, 2, 3, 4, 5, 6 ]
