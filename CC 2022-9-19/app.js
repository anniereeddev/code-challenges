// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// P: Function takes in two flowers and the number of petals on each flower
// R: Returns true if in love and false if not in love
// E: 

// Input: Flower 1 -> 4 petals && Flower 2 -> 5 petals --> love
// Input: Flower 1 -> 4 petals && Flower 2 -> 4 petals --> not in love
// Input: Flower 1 -> 3 petals && Flower 2 -> 3 petals --> not in love

// P: Start with a function

function lovefunc(flower1, flower2){
    // let's try an if function
    let result; 
    if (flower1 % 2 == 0 && Math.abs(flower2 % 2) == 1) {
        return "true";
    } else if (flower1 % 2 == 0 && flower2 %2 == 0) {
        return "false";
    } else if (Math.abs(flower1 % 2) == 1 && Math.abs(flower2 % 2) == 1) {
        return "false";
    } else {
        return "false"
    }
    return result;
    }

    // didn't work for flowers with 739 and 202 petals: expected 'false' to equal true. Dang