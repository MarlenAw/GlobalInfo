const duplicates = (arr) => {
  return arr.filter((elem, position) => {
    return arr.indexOf(elem) == position;
  })
}

console.log(duplicates(["b","h","n","v","b","f","f"]));


// const removeDup = (arr) => {
//
//   for(var i = 0; i < arr.length; i++){
//     for(var j = i; j < arr.length; j++){
//       if( i != j && arr[i] == arr[j]){
//         return true;
//       }
//     }
//   }
//   return false;
// }
//
//
// console.log(removeDup([6,7,4,3,1,8,4,2]));
