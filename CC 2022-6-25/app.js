// Prompt: Convert a Number to a String

// function numberToString(num) {
//     // Return a string of the number here!
//   }

// First attempt

// P: Function takes in a number. Spits out a string. 
// R: Returns a string.
// E: 123 => '123'
// E: 999 => '999'
// E: 021 => '021'
// P: Start with a function called numberToString. 
// Function converts number to string using preset Javascript syntax.
// Function returns string. 

function numberToString(num){
    return num.toString()
}

// It passed! I am BRILLIANT.

// Other solutions:

function numberToString(num) {
    return ''+ num
}

// I like this solution. Very easy to read that the number is turning into a string. If someone is reading this code that didn't write it, they will know what is going on very easily. 

function numberToString(num) {
    return String(num)
}

// This is another very good one, readable code and another function that I didn't know about in Javascript.

// additional more complicated solutions:

const numberToString = num => '${num}'

// this solution works too, it's another pretty simple way to convert the number to a string, I'm not super good at this syntax though.

