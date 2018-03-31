//Check if a string (first argument, str) ends with the given target string (second argument, target).

function checking(str, target){
  return str.substr(-target.length) === target;
}

console.log(checking("hellooooooo", "oooot")); //OUTPUT: false


//We use the method substr() with the negative value of target's length to extract the ending segment of str
//of the same size as target, compare it to target, and then return the value of this boolean expression.
