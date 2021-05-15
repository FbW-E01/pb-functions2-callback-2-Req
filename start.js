// * Write a function which will return square of a given number
// * Write a function which will return square of every number in array

/*
 The Square of 1 is: 1*1 = 1^2 = 1² = 1
 The Square of 2 is: 2*2 = 2^2 = 2² = 4
 The Square of 3 is: 3*3 = 3^2 = 3² = 9
 The Square of 4 is: 4*4 = 4^2 = 4² = 16
 The Square of 5 is: 5*5 = 5^2 = 5² = 25
*/

function squareNumber(number) {
  return Math.pow(number, 2);
}

function square(arr, func) {
  function runFunc(n){
    return func(n);
  }

  return arr.map(runFunc);
}

const array = [1, 2, 3, 4, 5, 6];
const newArray = square(array, squareNumber);  // return [1,4,9,16,25,36]
console.log(newArray);





