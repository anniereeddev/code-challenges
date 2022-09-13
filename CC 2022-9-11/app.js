// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// P: Function takes two words with one space in between them.
// R: Two capital letters with a dot separating them. 
// E: 
// Sam Harris => S.H

// patrick feeney => P.F
// P: Start with a function called function abbrevName(name)
// I have no idea how to do this... let's attempt something. 

// function apprevName(name){
//     let index = 1
//     return SVGComponentTransferFunctionElement.charAT(index); 
// }

// Let's attempt this again and DO OUR RESEARCH

// function apprevName(name){
//     const answer = [name[0]]
//     for(let i = 0; i < name.length; i++) {
//         if(name[i] === " ") {
//             answer.push(name[i + 1]);
//         }
//     }
//     return answer.map(e1 => else.toUpperCase()).join(".")
// }

// This did not work. WHY DIDN'T IT WORK???? 
// let's try to add this as an array

function abbrevName(name){
    let newArray = name.split(" ")
    return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
}

// It worked! I am brilliant.

