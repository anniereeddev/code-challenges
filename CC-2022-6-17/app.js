// remove the spaces from the string, then return the resultant string.

// first attempt

// P: need a funciton that takes in a string, and outputs a string. If there are any characters that are not numbers, function needs to ignore characters.
// R: original string with no spaces
// E: hello my name is ==> hellomynameis
// E: I am a parrot ==> Iamaparrot
// E: WHO IS THIS ==> WHOISTHIS

// P:
// Create a function that accepts a string
function noSpace(x){
    let result = x.RegExp("")
    if(result.test(x)){
        return
    }
}
// function cycles through string -- if it enounters a space, it does not return space
// return remaining characters in string

// Not sure how to run through the string and return only the characters. 