// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// P: Function takes in m amount of pages from n amount of classmates. The number of pages is the same per classmate. Input can only be positive.
// R: Return number of blank pages needed. 
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0
// P: Create a function called paperwork

function paperwork(n,m){
// I'm going to try an if function so that we can have two conditions, one for positive integers and one for negative integers
    if(n>=0 && m>=0) {
        return n*m;
    } else {
        return 0
    }
}

// got it. Man these math ones are EASY