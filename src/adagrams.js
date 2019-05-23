// use to run script node src/adagrams.js
// npm to test
const Adagrams = {
  drawLetters() {
    const amountOfLetters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A", 
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I","I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"
    ]

    let playersLetters = [];
    //slice copies a given part of an array and returns that copied part as a new array. 
    //It doesn’t change the original array.
    let randomLetters = amountOfLetters.slice();

    for (let i = 0; i < 10; i += 1) {
      //  Math.floor returns the largest integer less than or equal to a given number.
          const randomLettersIndex = Math.floor(Math.random() * (randomLetters.length));
          playersLetters.push(randomLetters[randomLettersIndex]);
          //splice changes an array, by adding or removing elements from it. 
          randomLetters.splice(randomLettersIndex, 1);
    }
 
    return playersLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (var i = 0; i < input.length; i += 1) {
      const letter = input.charAt(i);
      const index = lettersInHand.findIndex(function(element){
        return letter == element;
      })
      if (index != -1) {
        lettersInHand.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    const letterToValue = new Map([
      ["A", 1],
      ["E", 1],
      ["I", 1],
      ["O", 1],
      ["U", 1],
      ["L", 1],
      ["N", 1],
      ["R", 1],
      ["S", 1],
      ["T", 1],
      ["D", 2],
      ["G", 2],
      ["B", 3], 
      ["C", 3],
      ["M", 3],
      ["P", 3],
      ["F", 4],
      ["H", 4],
      ["V", 4],
      ["W", 4],
      ["Y", 4],
      ["K", 5],
      ["J", 8], 
      ["X", 8],
      ["Q", 10],
      ["Z", 10],
    ])
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;

console.log(Adagrams.drawLetters());

