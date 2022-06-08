// Given an array of integers.

// Return an array, where the first element is the count of positive numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//P: If input is empty/null, return empty array. Want: the amount of positive numbers, sum of negative numbers. 0 doesn't count since it's not positive or negative. 
//R: Array with: [Count of positive numbers, sum of negative numbers].
//E: 
//P: Make a function that takes in an array. 

//first attempt
function countPositiveSumNegative(arr){
    let result = []
    let count = 0
    let sum = 0
    //Determine whether numbers in array are positive or negative.
    arr.map(e=>
        {if(e>0){
            count += 1
        }else if(e<0){
            sum += e
        }}
        ) 

    return arr
    //If it's positive, count how many positive numbers there are.
    //If it's negative, sum the negative numbers together. 
    //If it's empty or null, return an empty array. 
    //Put results into an array
    //Return array
}

//not working, idk why it hates me

console.log(countPositiveSumNegative([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],[10, -65]]))
console.log(countPositiveSumNegative([[3,-6,9,-12,15,0],[3,-18]]))
console.log(countPositiveSumNegative([[],[]]))