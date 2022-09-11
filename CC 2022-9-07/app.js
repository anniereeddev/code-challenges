// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// P: Non-negative number.
// R: Digits of number in an array in reverse order
// E: 
// 35231 => [1,3,2,5,3]
// 0 => [0]
// P: Make a function called digitize

// function digitize(n) {
//     // split into a string
//     var makeArr = n.split("");
//     // reverse array
//     var reverseArr = splitString.reverse();
//     // return 
//     return reverseArr;
// }

// function digitize(n) {
//     var makeArr = string(n).split("").map((num)=?{
//     var reverseArr = splitString.reverse();
//     return reverseArr;
// })
// }

// fail :'( what did I do wrong
// apparently n.split is not a function. let's try to fix that.

// still didn't work... let's DO OUR RESEARCH.
// I think the string split is the problem 

// function digitize(n) {
//     var makeArr = n.toString().split('');
//     var reverseArr = splitString.reverse();
//     return reverseArr;
// }

// still no. hmmmmmm. I think we're still having string split problems.

// function digitize(n) {
//     Array.from(String(n), Number);
//     var reverseArr = splitString.reverse();
//     return reverseArr;
// }

// still no WHYYYY

function digitize(n) {
    let arrayOfDigits = Array.from(String(n), Number);
    let reverseArr = arrayOfDigits.reverse();
    return reverseArr;
}

// ARGH IT WASN'T SPLIT STRING IT WAS FREAKING REVERSEARR !!!
// ugh. well we got there.

// Other successful answers

//   This one is a bit more concise, i like it and I didn't know about this split string context. also they used map, I really need to get better at map
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

//   Also pretty succinct, more array syntax
  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

//   so many ways to do it!
function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }