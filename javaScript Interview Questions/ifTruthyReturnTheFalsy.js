//Create a function that works in the opposite way of 'Filter'
// If a function return 'true', the item should NOT be included in the new array
// For Example:
// array = [10, 20, 30]
// return number > 15
// should return 10

let numbers = [10, 20, 30];

const reject = (array, iteratorFunction) => {
  return array.filter((num) => {
    return !iteratorFunction(num);
  });
}


const lessThanFifteen = reject(numbers, (number) => {
  return number > 15;
});

console.log(lessThanFifteen);
