/************/
/*** ES5 ***/
/**********/

function addNumbers(a,b,c,d,e){
  var numbers = [a,b,c,d,e]; //to use reduce it need to be an array
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
console.log(addNumbers(1,3,4,2,5)); //OUTPUT: 15

/************/
/*** ES6 ***/
/**********/

function addNumbers(...numbers){
  return numbers.reduce((sum, number) =>{
    return sum + number;
  }, 0)
}
console.log(addNumbers(3,3,3,2,9)); //OUTPUT: 20
