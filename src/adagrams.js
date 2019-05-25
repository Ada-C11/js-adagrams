const _ = require('lodash')

const letterPool = {
  'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
  'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6,
  'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4,
  'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1,
}

const Adagrams = {
  drawLetters() {
    const keys = Object.keys(letterPool);
    const length = keys.length;
    const lettersInHand = [];

    for (let i = 0;i < 10;i += 1) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomKey = keys[randomIndex];
      lettersInHand.push(randomKey);
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const duplicateHand = lettersInHand.sort();
    const inputArray = input.split('');

    const comparisonArray = []
    for (let letter of input) {
      comparisonArray.push((duplicateHand.splice(duplicateHand.indexOf(letter), 1).toString()))
    }
    if (_.isEqual(comparisonArray, inputArray)) {
      return true;
    } else {
      return false;
    }
  },


  scoreWord(word) {
    const scoreChart = {
      'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2,
      'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1,
      'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1,
      'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10,
    };

    const upperCaseWord = word.toUpperCase();
    let totalScore = 0;

    if (upperCaseWord.length > 6 && upperCaseWord.length < 11) {
      totalScore += 8;
    }

    for (let i in upperCaseWord) {
      let key = upperCaseWord[i]
      totalScore += scoreChart[key];
    }
    return totalScore;
  },

  highestScoreFrom(words) {
    const allScores = words.map((word) => {
      const newWord = {
        'word': word,
        'score': this.scoreWord(word)
      };
      return newWord;
    });

    let winningWord = allScores[0];
    for (let i in allScores) {
      if (allScores[i].score > winningWord.score) {
        winningWord.word = allScores[i].word;
        winningWord.score = allScores[i].score;
      } else if
        (allScores[i].score === winningWord.score &&
        allScores[i].word.length === 10) {
        winningWord.word = allScores[i].word;
        return winningWord;
      } else if
        (allScores[i].score === winningWord.score &&
        allScores[i].word.length < winningWord.word.length) {
        winningWord.word = allScores[i].word;
        return winningWord;
      }
    }
    return winningWord;
  }
};


//Do not remove this line or your tests will break!
export default Adagrams;


