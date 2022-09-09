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

function digitize(n) {
    var makeArr = n.toString().split('');
    for (i=0; i < makeArr.length; i++) makeArr[i] = +makeArr[i] | 0;
    var reverseArr = splitString.reverse();
    return reverseArr;
}

// still no WHYYYY