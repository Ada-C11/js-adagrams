// randomItems(items) {
//   return items[Math.floor(Math.random()*items.length)];
// }
const randomIndex = function randomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const Adagrams = {

  drawLetters() {

    const letterPool = { 'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1};
    const letterBank = []

    for (let key in letterPool) {
      for (let i = 0; i < letterPool[key]; i += 1 ) {
        letterBank.push(key);
      }
    }

    const drawnLetters = []
    for (let i = 0; i < 10; i += 1) {
      let randomLetter = letterBank[randomIndex(letterBank.length)];
      if(letterBank.includes(randomLetter)) {
        drawnLetters.push(randomLetter);
        letterBank.splice(letterBank.indexOf(randomLetter), 1);
      }
    }

    drawnLetters.forEach(letter => letterBank.push(letter));

    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.split('');

    for (let i = 0; i < inputArray.length; i += 1) {
      if (lettersInHand.includes(inputArray[i])) {
        lettersInHand.splice(lettersInHand.indexOf(inputArray[i]), 1);
      } else {
        return false;
      }
    };
    return true;
  }, 

  scoreWord(word) {
    const scoreBank = {
      "A": 1, "B": 3, "C": 3, "D": 2,
      "E": 1, "F": 4, "G": 2, "H": 4,
      "I": 1, "J": 8, "K": 5, "L": 1,
      "M": 3, "N": 1, "O": 1, "P": 3,
      "Q": 10, "R": 1, "S": 1, "T": 1,
      "U": 1, "V": 4, "W": 4, "X": 8,
      "Y": 4, "Z": 10,
    }
    const wordArray = word.toUpperCase().split('')
    let total = 0

    for (let i = 0; i < wordArray.length; i += 1) {
      total += scoreBank[wordArray[i]]
    }

    if(wordArray.length > 6 && wordArray.length < 11) {
      total += 8
    }

    return total
  },

  highestScoreFrom(words) {
    let maxScore = 0
    let bestWord = words[0]
    for (let i = 0; i < words.length; i += 1) {
      if (this.scoreWord(words[i]) > maxScore) {
        maxScore = this.scoreWord(words[i])
        bestWord = words[i]
      } else if (this.scoreWord(words[i]) === maxScore ) {
        if ((words[i].length === 10 && bestWord.length != 10 ) || (words[i].length < bestWord.length && bestWord.length != 10)) {
          bestWord = words[i]
        }
      }
    }

    return { word: bestWord, score: maxScore}
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
