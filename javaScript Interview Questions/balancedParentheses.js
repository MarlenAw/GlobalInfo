function balancedParens(str){
  return !str.split("").reduce(function(prev, char){ //adding ! so the result can be true or false..if we take it out it'll give us the number of the parens
    if(prev < 0){
      return prev;
    }if(char === "("){
      return ++prev;
    }if(char === ")"){
      return --prev;
    }
    return prev;
  }, 0) // 0 because we want to count - if ( then add 1..if ) then minus 1
        // by the end if the result is > 0 then they're not balanced..if its 0 then they are balanced.
}

console.log(balancedParens("())")); // 1 - 1 - 1 = -1   False
console.log(balancedParens("(())"));  // 1 + 1 - 1 - 1 = 0  True
