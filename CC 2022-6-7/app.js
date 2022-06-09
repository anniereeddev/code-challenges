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

//second attempt

function countPositiveSumNegative(arr){
    const empty = arr => arr.length = 0
    let positiveArr = arr.filter(e => e>0)
    let count = positiveArr.length
    let negativeArr = arr.filter (e => e<0)
    let sum = negativeArr.reduce((acc,c)=>acc+c,0)
    if(arr == [] || arr == null){
        return []
    }else if(arr.forEach(e=>{
        if(e==0){
            return [empty]
        }
    })
    return[count,sum]
}

//Can't figure out to have [0,0] to return []. However the rest of the problem is working. 

console.log(countPositiveSumNegative([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],[10, -65]]))
console.log(countPositiveSumNegative([[3,-6,9,-12,15,0],[3,-18]]))
console.log(countPositiveSumNegative([[],[]]))