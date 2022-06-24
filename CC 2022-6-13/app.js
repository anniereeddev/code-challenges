// Prompt: Couting sheet
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Hint: Don't forget to check for bad values like null/undefined

// 

// first attempt:
// P: function that takes in an array, check for null/undefined values -- those shouldn't be counted; need to account for uppercase and lowercase
// R: returns number of array indices that say 'true'
// E: [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// P: Write function that takes in array
function countSheeps(arrayOfSheep){
// Function needs to cycle through the array and evaluate what is present in the array. 
    // let sheep = 0
    let numberOfSheep = arrayOfSheep.forEach(e => {
// If the word is "true", then the function counts that word
        if(arrayOfSheep === 'true' || 'True') {
            arrayOfSheep.reduce(p,c) => p + c, 0
        } else{
            continue
        }
// If the word isn't "true", then the function skips that word
// Add up all the trues
// Return number of trues
}}

// Didn't work. I don't think I need forEach AND reduce. Probably can pull it off only with reduce, but I thought I needed forEach to cycle through each index in the array. We'll see if we can fix that in the second attempt.

// second attempt

function countSheeps(arrayOfSheep){
    let sheep = arrayOfSheep.filter(sheep => sheep)
    return sheep.length
}

// This was a lot simpler than what I was trying above. The filter function goes through the array and passes it through whether or not is is a sheep. It returns everything that is a sheep. Then we use .length to count out how many are in that new array. I still don't understand the (sheep => sheep) part, I'm going to try to figure out why that syntax works. 

// other solutions

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

//   why does this work? I guess the Boolean part of it is assuming you are looking for the sheep. Not sure how we make that assumption.

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

//   This one is more expanded without the use of filter. Again, how does it know that we are looking for sheep?