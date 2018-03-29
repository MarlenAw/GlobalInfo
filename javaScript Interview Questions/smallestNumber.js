function smallestNum(num){
  var firstCell = num[0];

  for(var i = 0; i < num.length; i++){
    var anyCell = num[i];
    if(anyCell < firstCell){
      var temp = anyCell;
      anyCell = firstCell;
      firstCell = temp;
    }
  }
  return firstCell;
}

console.log(smallestNum([4,3,5,6,2,1,0,-4,-2])); //OUTPUT: -4


//Easiest Solution

function smallestNum(numbers){
  numbers.sort((a, b) => {
    return a - b;
  });

  return numbers[0];
}

console.log(smallestNum([4,3,5,6,2,1,0,-7,-2])); //OUTPUT: -7
