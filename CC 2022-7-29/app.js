// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// First attempt: 

//P: Function takes in two numbers and applies an operation to them.
// R: Returns the result of the two numbers after the operation has been applied.
// E ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// P: Create a function basicOp
// Find a function that will accept an operation and the numbers.

// When in doubt, write an if statement!

function basicOp(operation, value1, value2)
{   if(operation == "*") 
        { result = value1 * value2;}
    else if(operation == "/") 
        { result = value1 / value2;} 
    else if(operation == "+") 
        {result = value1 + value2;}
    else if(operation == "-") 
        {result = value1 - value2;}
        return result
}

// it worked!! I'm BRILLIANT!

// other solutions:

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// this on using switch case which is something I haven't used much, good solution

// function basicOp(o, a, b) {
  return eval(a+o+b);
}

// what the --  !! 
// The eval() function evaluates JavaScript code represented as a string and returns its completion value. 
// that's incredibly efficient, probably the best way to do this.