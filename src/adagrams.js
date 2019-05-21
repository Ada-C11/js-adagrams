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
};

// Adagrams.usesAvailableLetters("CAT", ["C", "A", "T"])

// Do not remove this line or your tests will break!
export default Adagrams;
