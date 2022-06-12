// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// first attempt 

function positiveSum(arr) {
    if(arr % 2 === 0){
      arr.reduce
    }
  }

//   second attempt

// P: If there is nothing to sum, the sum is default to 0. Will be given an array of positive and negative numbers.  Will it ever have anything besides numbers in it? 

//R: Return sum of positive numbers. 
//E: Example [1,-4,7,12] => 1 + 7 + 12 = 20
//E: [3,20,5,-94] => 3 + 20 + 5 = 28
//E: [] => 0

//P: First need to take in a function that takes a parameter. 
function positiveSum(arr) {
    //Need to see whether numbers in string are positive or negative.
    //If number is positive, add the numbers together.
    //If number is negative, ignore number.
    let newArr = arr.filter(e=>e>0) //filters through string for positive numbers
    //If NAN, ignore.
    //If array is empty, return 0.
    //Return result.
    return newArr.reduce((acc,c)=>acc+c,0) //adds numbers together. Remember to add 0 at end, it is the initial value.
}

console.log(positiveSum([1,-4,7,12]))
console.log(positiveSum([3,20,5,-94]))
console.log(positiveSum([]))
