// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Input constraints:

//     0 <= h <= 23
//     0 <= m <= 59
//     0 <= s <= 59

// P: Function takes in an hour, minute, and second in digit format. Input constraints --> 24 hours = 0, 60 minutes = 0 minutes, 60 seconds = 0 seconds (at least I hope)
// R: Return number of miliseconds. 
// Example:

// h = 0
// m = 1
// s = 1

// result = 61000
// P: Make a function called function past (h, m, s) 

function past(h, m, s){
// I'm going to create a math function here and try to keep it simple, hopefully it will work
    return h*3600000 + m*60000 + s*1000
}

// I think this has potential except I'm worried about the input constraints, but let's give it a try.

// Holy crap, it passed! I'M AMAZING

// Other solutions -- we're all about efficiency

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

// I like this format, I want to do it more
// That's pretty much the only other good one