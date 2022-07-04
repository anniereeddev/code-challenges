// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// FIRST ATTEMPT:

// P: Function will take in number of hours. 0.5 liters of water = 1 hr
// R: Returns water in litres. Round vallue to the smallest value, aka the first integer.
// E: time = 3 ----> liters = 1
// E: time = 6.7 ----> liters = 3
// E: time = 11.8 ----> liters = 5
// P: Write a function called litres(time)
// Returns rounded number of liters. 

function litres(time) {
    return Math.round(0.5 * time); //Math.round returns the value of the number rounded to the nearest integer. 
  }

//   first attempt didn't work. Looks like 0 caused an issue in the function, or in other words when the function takes in zero it returns an undefined. How do I account for that? 