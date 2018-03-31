//Remove all elements from the initial array that are of the same value as these arguments.
//Basic Solution
function destroy(arr){
  var args = Array.prototype.slice.call(arguments);

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < args.length; j++){
      if(arr[i] === args[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean); // output without using (filter) is like that: [ <2 empty items>, 5, 6 ]..with filter its [5, 6]
}

console.log(destroy([3,4,5,6], 4,3)); //Output: [5, 6]


//Intermediate Solution
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

console.log(destroy([3,4,5,6], 4,3)); //Output: [5, 6]
