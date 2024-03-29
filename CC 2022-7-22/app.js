// Introduction

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.

// First Attempt:

// P: Create a function that accepts any year. 
// R: Century that year is in.
// E: 1705 --> 18
// E: 1900 --> 19
// E: 1601 --> 17
// E: 2000 --> 20
// P: Write a function called century
// Century accepts the year.
// Function analyzes compares year against centuries and matches to correct century.
// Function returns century.

// I'm going to try an if statement for my first attempt.It'll be long and perhaps not the most efficient, but hopefully it'll be simple.

function century(year) {
    if(1<year<100){
        result = '1';
    } else if(101<year<200){
        result = '2';
    } else if (201<year<300){
        result = '3';
    } else if (301<year<400){
        result = '4';
    } else if (401<year<500){
        result = '5';
    }else if (401<year<500){
        result = '5';
    }else if (501<year<600){
        result = '6';
    }else if (601<year<700){
        result = '7';
    }else if (701<year<800){
        result = '8';
    }else if (801<year<900){
        result = '9';
    }else if (901<year<1000){
        result = '10';
    }else if (1001<year<1100){
        result = '11';
    }else if (1101<year<1200){
        result = '12';
    }else if (1201<year<1300){
        result = '13';
    }else if (1301<year<1400){
        result = '14';
    }else if (1401<year<1500){
        result = '15';
    }else if (1501<year<1600){
        result = '16';
    }else if (1601<year<1700){
        result = '17';
    }else if (1701<year<1800){
        result = '18';
    }else if (1801<year<1900){
        result = '19';
    }else if (1901<year<2000){
        result = '20';
    }else if (2001<year<2100){
        result = '21';
    } else{
        return 'undefined';
    }
}

// Didn't work :/ dagnabit, I thought I had that one! it looks like we have a problem with the undefined at the end. I'll change it to see if I can get it to work. 

// O took out the = in the undefined and that error has gone away. Great! Guess no = allowed.

// New error: Testing for year 1705: expected undefined to equal 18 

// So I'm guessing from that this isn't working. Not sure why -- time to google!

// second attempt:

function century(year) {
    return Math.floor((year-1)/100) + 1;
}

// It worked!

// Learning time:
// The Math.floor() function always rounds down and returns the largest integer less than or equal to a given number.
// So what we're doing here is taking the number, rounding down (1780 would round down to 1700), and returning one integer down (17 turns to 16).
// I didn't know this was an available function in javascript. Ya learn something new every day!

// Other solutions:

const century = year => Math.ceil(year/100)

// returns the smallest integer greater than or equal to x. It's the same value as -Math.floor(-x).
// So basically what we're doing is reducing the number to its integer value (1780 would become 17.8) and then returning it as the smallest equal or greater integer (17.8 --> 17). That's smart!

// I'm still not sure why my if/else statement didn't work. Here is one solution that is a bit similar:

function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }