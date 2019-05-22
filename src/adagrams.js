
const letterDistribution = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1,
}

const letterPoints = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10,
}

// const fillPool = (letterPool) => {
//   Object.keys(letterDistribution).forEach( function(letter) {
//     for (let i = 0; i < letterDistribution[letter]; i += 1) {
//       letterPool.push(letter);
//     }
//   })
// }

const Adagrams = {
  fillPool(letterPool) {
    Object.keys(letterDistribution).forEach( function(letter)  {
      for (let i = 0; i < letterDistribution[letter]; i += 1) {
        letterPool.push(letter);
      }
    })
  },

  drawLetters() {
    let pool = [];
    this.fillPool(pool);
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      let drawnIndex = Math.floor(Math.random() * pool.length);
      hand.push(pool[drawnIndex]);
      pool.splice(drawnIndex, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i += 1) {
      if (lettersInHand.includes(input[i])) {
        let pos = lettersInHand.indexOf(input[i]);
        lettersInHand.splice(pos, 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i += 1) {
      score += letterPoints[word[i]]
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
