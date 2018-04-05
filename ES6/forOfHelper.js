const numbers = [1, 2, 3, 4];
let sum = 0;

/************/
/*** ES5 ***/
/**********/
for(var i = 0; i < numbers.length; i++){
  sum += numbers[i]
}

console.log(sum); //OUTPUT: 10


/************/
/*** ES6 ***/
/**********/

for(let number of numbers){
   sum += number;
}

console.log(sum); //OUTPUT: 10
