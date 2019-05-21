const Adagrams = {
  drawLetters() {
    //letter counts of all available letters
    const letterCounts = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2,
      'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2,
      'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 
      'Y': 2, 'Z': 1
    };

    //Create an array of all available letters in respective counts,
    //this will make sure ensure that e is more likely than z.
    let letters = []
    Object.keys(letterCounts).forEach( (letter) => {
      for (let i = 0; i < letterCounts[letter]; i += 1) {
        letters.push(letter);
      }
    })

    let drawnLetters = []
    //Logic for drawing the letters
    for (let i = 0; i < 10; i += 1) {
      let letter = letters[Math.floor(Math.random() * (letters.length))];
      drawnLetters.push(letter);

      //This will remove the drawn letter just once from the letters array
      for (let i = 0; i < letters.length; i += 1) {
        if (letters[i] === letter) {
          letters.splice(i, 1);
          break;
        }
      }
    }

    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    let unusedLetters = lettersInHand;

    //iterate through the array backwards, this prevents double checking a letter
    for (let i = input.length -1 ; i >= 0; i -= 1) {
      if (unusedLetters.includes(input[i])) {
        unusedLetters.splice(i, 1);
      } else {
        return false;
      }
    }

    return true;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
