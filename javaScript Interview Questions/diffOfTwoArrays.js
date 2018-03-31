// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

function diffTwo(arr1, arr2){
  return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));

}

console.log(diffTwo([2,3,4,5,6], [1,2,3,4,5])); //OUTPUT: [6, 1]  --> first array gives 1 the second array gives 6
