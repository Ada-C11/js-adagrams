const Adagrams = {
  //WAVE 1:
  drawLetters() {
    // Set up hash of letters w/ frequency 
    const letterFrequencies = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
      'H': 2, 'I': 9, 'J': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8,
      'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2,
      'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    };

    // use entries 
    // creating the empty lettersPool array 
    const lettersPool = [];
    // loop through frequencies to push letters to lettersPool 
    // entries will be an array of arrays w/ letter + count in each array 
    const entries = Object.entries(letterFrequencies)
    entries.forEach(entry => {
      letter = entry[0];
      count = entry[1];
      // adding a letter into the array, w/ for loop to add the letter count number of times 
      for (let i = 0; i < count; i += 1) {
        lettersPool.push(letter)
      }
    });

    
    // fill in the letter pool based on the letter frequencies,
    // then use that as the place to grab letters from to populate the hand


      // empty array for hand of 10 random letters from lettersPool 
      let handLetters = [];
      // for loop to draw hand of 10 random letters - ex. in animalsounds.js
               // initialization - condition - increment 
      for (let i = 0; i < 10; i += 1) {
        // define letter to pull 10 random letters
        // pulling letters will not change lettersPool for future draws - ex. in tips.js
              //use Math.floor to round down correctly and not return NaN
        let letter = lettersPool[Math.floor(Math.random() * (lettersPool.length))];
        // push 10 selected letters into array 
        handLetters.push(letter);
      }
      // return array to player Q-- explicit return 
    return handLetters;
  }
}

console.log(Adagrams.drawLetters())

  // WAVE 2: check if the word is an anagram from some/all handLetters

  // boolean function to confirm if valid play
  // input = string for input word ---  lettersInHand = handLetters player has w/ each string = 1 letter

//   const usesAvailableLetters = function usesAvailableLetters(input, lettersInHand) {
//     // returns true or false, like baby animal example?
//     if (input === lettersInHand) {
//       return true;
//      } else {
//       return false;
//      }
//     };
//   }

// },

  // WAVE 3: returns the score of a given word 
    // parameter of word - is a string of characters
 
    // returns an integer for point total - add the points for each letter
    // add 8 pts if word is 7, 8, 9, or 10 length 

//     const lettersValue = {

      // if(word.length==(7, 8, 9, 10))

//     }

// // Do not remove this line or your tests will break!
// export default Adagrams;

