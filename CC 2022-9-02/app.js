// Given an array of integers, return a new array with each value doubled.

// P: Input: array of integers.
// R: Array with value doubled.
// E:
// 1,2,3,4,5 --> 2,4,6,8,10
// P: Make a function called maps

// idk why this is called maps when it has nothing to do with maps

// first attempt
// function maps(x){
//     return x*2;
// }

// Didn't work because of flippin zero

// function maps(x){
//     if x=0{
//         return = 0;
//     }else{
//         return x*2;
//     }
// }

// didn't work, I think my syntax is wrong

// third attempt

// function maps(x){
//     let result;
//     if (x = 0) {
//         result = 0;
//     } else {
//         result = x*2;
//     }
//     return result;
// }

// still didn't work gaaahhhhh what am i doing wrooonnnngggg
// let's try this again
// after some research, we are trying a whole new method

// function maps(x){
//     let result = x.map(function(x) {
//         return 2*x;
//     });
//     return maps;
// }

// I feel like this is pretty similar to my first attempt, but it doesn't hurt to give it a try!
// it didn't work AGAIN GAH
// after some tweaks we're trying this
// didn't work. why am I not surprised. Back to the researching

function maps(x) {
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}

// it is embarrassing how long and how much research it took me to get this. I just kept getting hung up on variables and the for loop...anyway, the point is, we got there. It works! gah. 

// here are some other examples of successful answers :

function maps(x){
    return x.map(n => n * 2);
  }

//   I like this one -- very clean, no for loop necessary

maps = x => x.map(e => e * 2);

// ooooo fancy 

