//Easiest Solution

function largestNum(numbers){
  numbers.sort((a, b) => {
    return b - a;
  });
  return numbers[0];
}

console.log(largestNum([5,8,2,33,57,1,4,73656356])); //OUTPUT: 73656356


function largestNum(number){
  var firstCell = number[0];

  for(var i = 0; i < number.length; i++){
    var anyCell = number[i];

    if(anyCell > firstCell){
      var temp = anyCell;
      anyCell = firstCell;
      firstCell = temp;
    }
  }
  return firstCell;
}

console.log(largestNum([43,2,4,6,8,12,4,87,99,3,1900])); //OUTPUT: 1900
