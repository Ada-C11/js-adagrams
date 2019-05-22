const _ = require('lodash');

const Adagrams = {
  letters: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B',
    'C', 'C',
    'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F',
    'G', 'G', 'G',
    'H', 'H',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'J',
    'K',
    'L', 'L', 'L', 'L',
    'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
    'P', 'P', 
    'Q',
    'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S',
    'T', 'T', 'T', 'T', 'T', 'T',
    'U', 'U', 'U', 'U',
    'V', 'V',
    'W', 'W',
    'X',
    'Y', 'Y',
    'Z'],
  scores: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
  },

  drawLetters() {
    return _.sampleSize(this.letters, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    const playedLetters = (input.toUpperCase()).split('');
    let valid = {};
    let result = true;

    lettersInHand.forEach((letter) => {
      valid[letter] ? valid[letter] += 1 : valid[letter] = 1;
    });

    playedLetters.forEach((letter) => {
      if (valid[letter]) {
        valid[letter] <= 0 ? result = false : valid[letter] -= 1;
      } else {
        result = false;
      }
    });
    return result;
  },

  scoreWord(word) {
    const input = (word.toUpperCase()).split('');
    const array = Object.entries(this.scores);
    let total = 0;

    input.forEach((letter) => {
      array.forEach((score) => {
        if (score[1].includes(letter)) {
          total += parseInt(score[0]);
        }
      });
    });

    if (word.length >= 7) {
      total += 8;
    }

    return total;
  },

  highestScoreFrom(words) {
    let highestScore = { word: '', score: 0};

    words.forEach((word) => {
      const score = this.scoreWord(word);
      // console.log(highestScore);

      if (score > highestScore.score) {
        highestScore.word = word;
        highestScore.score = score;
      } else if (score === highestScore.score) { 
        if ((word.length === 10 && highestScore.word.length != 10) || 
        ((word.length < highestScore.word.length) && highestScore.word.length != 10)) {
          highestScore.word = word;
          highestScore.score = score;
        } 
      }
    });
    return highestScore;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
