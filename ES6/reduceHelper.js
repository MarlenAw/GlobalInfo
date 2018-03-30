var numbers = [30, 40, 10];
var sum = 0;

/************/
/*** ES5 ***/
/**********/

for(var i = 0; i < numbers.length; i++){
  sum += numbers[i]
}

console.log(sum); //OUTPUT: 80

/************/
/*** ES6 ***/
/**********/


var reduceMeth = numbers.reduce((sum, number) => {
  return sum + number
}, 0); //init the value for sum to start at 0 -> 0 + 30 + 40 + 10 = 80

console.log(reduceMeth); //OUTPUT: 80
