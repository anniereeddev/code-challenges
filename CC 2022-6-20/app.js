// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// First attempt

// P: Function takes in an array and results in a number. 
// R: Number that is the sum of the squares of each number in the array.
// E: [1,2,2] => 9
// E: [0,3,4] => 23
// E: [-1,3,-2] => 14

// P: 
// Function needs to input array of numbers
function squareSum(numbers){
    let result = numbers.forEach((e,i)=>
// Each number in the array should be squared, then summed.
    e + i^2,0)
    return result
}
// Return result.

squareSum([1,2,2])

// Welp, that's not working. I don't think I have the syntax of forEach right. 

// Second attempt

function squareSum(numbers){
    let result = numbers.reduce((acc,c)=>acc+c**2,0)
    return result 
}

// It works! Reduce ended up being a better option than forEach becuase it adds the indexes together and returns a number. All I had to do was square the added number and woila! I fixed it!

// Most efficient community answer:

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }

//   This one used reduce as well. Similar concept to what I did except no arrow function here.

// Answer using forEach because I'm curious:

function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }

//   I didn't understand the right side of the forEach operator in the curly brackets. Looks like you pretty much do whatever you want in there, makes a lot more sense seeing it.