const _ = require('lodash');
// node -r esm src/adagrams.js 
// option shift f
const Adagrams = {
  drawLetters() {
    const allLetters = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"]

    const lettersInHand = _.sampleSize(allLetters, 10);

    return lettersInHand;

  },

  usesAvailableLetters(input, lettersInHand) {
    let lettersObject = {}
    lettersInHand.forEach(function (letter) {
      if (lettersObject[letter] !== undefined) {
        lettersObject[letter] += 1;
      } else {
        lettersObject[letter] = 1;
      }
    });

    const inputArray = input.split("")

    let passes = true

    inputArray.forEach(function (letter) {
      if (lettersObject[letter] !== undefined ) {
        lettersObject[letter] -= 1;
      } else {
        passes = false;
      }
    });

    Object.values(lettersObject).forEach(function (value) {
      if (value < 0) {
        passes = false;
      }
    });

    return passes;

  },

  scoreWord(word) {

    const letterScores = {
      'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4,
      'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3,
      'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 
      'Y': 4, 'Z': 10
    };

    let score = 0;

    const wordArray = word.split("");

    wordArray.forEach(function (letter) {
      score += letterScores[letter]
    });

    if (wordArray.length > 6) {
      score += 8
    };

    return score
  },

  
};

// Adagrams.scoreWord("XXXXXXXX")

// Do not remove this line or your tests will break!
export default Adagrams;
