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

// It worked! I don't think that should have been as hard lol. Let's look at other solutions. Here's one I thought should have worked. 

function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

//I feel like mine was exactly the same as this one...why did theirs work? argh

const greet = name => `Hello, ${name} how are you doing today?`;

// This is a nice shorter version

function greet(name) {
    return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f`
  }

//   What the flippers is going on here??? are those...letters???

