const _ = require("lodash")

const Adagrams = {
  drawLetters() {
    const availLetters = {
      A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12,
      R: 6, F: 2, S: 4, G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1
    }

    const generateLetters = function generateLetters(availLetters) {
      let array = []
      Object.keys(availLetters).forEach( letter => {
        for (let i = 0; i < availLetters[letter]; i += 1) {
          array.push(letter);
        }})
      return array;
    }

    const letterFrequency = generateLetters(availLetters);
    const lettersInHand = _.sampleSize(letterFrequency, 10);
    return lettersInHand;
  },
  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) {
      return false;
    }
    const lettersHash = {}
    lettersInHand.forEach( function(letter) {
      if (lettersHash[letter]) {
        lettersHash[letter] += 1;
      } else {
        lettersHash[letter] = 1;
      }
    })

    input.toUpperCase();
    let boolean = true;
    const inputArray = input.split('');
    inputArray.forEach ( function(letter) {
      if (lettersHash[letter]) {
        lettersHash[letter] -= 1;
        if (lettersHash[letter] < 0) {
          boolean = false;
        }
      } else {
        boolean = false;
      }
    })
    return boolean;
  },  

  scoreWord(word){
    const letterScore = {
      A: 1, N: 1, B: 3, O: 1, C: 3, P: 3, D: 2, Q: 10, E: 1, R: 1, F: 4, S: 1,
      G: 2, T: 1, H: 4, U: 1, I: 1, V: 4, J: 8, W: 4, K: 5, X: 8, L: 1, Y: 4, M: 3, Z: 10,
    }
    let total = 0;
    word = word.toUpperCase();
    const wordArray = word.split('');
    if (wordArray.length > 6) {
      total += 8;
    }
    wordArray.forEach(letter => total += letterScore[letter]);
    return total;
  },
  highestScoreFrom(words) {
    let winner = { word: '', score: 0 };
    words.forEach( word => {
      if (this.scoreWord(word) > winner.score) {
        winner = { word: word, score: this.scoreWord(word) }
      } else if (this.scoreWord(word) === winner.score) {
        if (((word.length < winner.word.length) || (word.length === 10)) && (winner.word.length != 10)) {
          winner = { word: word, score: this.scoreWord(word)};
        }
      }
    }) 
    return winner;
  },
};

export default Adagrams;