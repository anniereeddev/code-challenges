// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// First attempt:

// P: Function takes in a name.
// R: Returns greeting with name inserted.
// E: Input: Bob. Return: Hello Bob, how are you doing today?
// P: Start with a function called 
// Function needs to accept name and return a string with name inserted. 

function greet(name){
    return "Hello <name>, how are you today?"
}    

// Didn't work, I'm pretty sure that I have the syntax wrong here. 

function greet(name){
    return "Hello ${name}, how are you today?";
}

// I think we need a parenthesis

function greet(name){
    return("Hello ${name}, how are you today?");
}

// Still didn't work! I think we need to define name as a variable
function greet(name){
    const name = prompt("What is your name?");
    return("Hello ${name}, how are you today?");
}

// Still not working. So after some googling, this is the new format I'll be trying.

function greet(name) {
    return "Hello " + name + ", how are you today?";
}

// It worked! I don't think that should have been as hard lol

