// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// first attempt

// p: function must take in a string
// r: function gives out a number
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
// p: 
// create a function
// use js to convert from string to number
// return number

const stringToNumber = function(str){
    return null-'';
  }

// This is the opposite of what we saw in the "number to string" challenge so I thought this would work, but for some reason it doesn't seem to work. maybe I'm using the wrong subtract sign for javascript?

// second attempt

const stringToNumber = function(str){
    return Number(str)
  }

//   It worked! 
// This is essentially the opposite of one of the solutions from the number to string kata. Looks like it works both ways. Noice. 

// other solutions

var stringToNumber = function(str){
    return parseInt(str);
  }

//   This is apparently another way to turn a string into a number. Good to know. That's the whole purpose of parseInt. I wonder why there are different ways to do the same thing in Javascript. 

var stringToNumber = function(str){
    return +str;
  }

//   I *think* that this is the opposite of num + '' that we saw last code challenge. Not sure though