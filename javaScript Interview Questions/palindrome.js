//Basic Solution -- Not what they're looking for in an interview!!!


// function checkPalindrom(word){
//   return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
// }
//
// console.log(checkPalindrom('fifiii'));


//Advanced Solution
function checkPalindrom(word){
  front = 0;
  back = word.length - 1;

  while(back > front){
    while(word[front].match(/[\W_]/)){
      front++
      continue;
    }while(word[back].match(/[\W_]/)){
      back--
      continue;
    }if(word[front].toLowerCase() !== word[back].toLowerCase())
      return word + " is not a palindrome";
      front++
      back--
  }
    return word + " is palindorme";
}

console.log(checkPalindrom('eyee'));
