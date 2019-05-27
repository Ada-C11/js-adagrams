const Adagrams = {
  drawLetters() {
    const letters = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 2,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1,
    };
    const alphabets = [];
    for (const letter in letters) {
      while (letters[letter] > 0) {
        alphabets.push(letter);
        letters[letter] -= 1;
      }
    }
    const letterHand = [];
    let limit = 0;
    while (limit < 10) {
      let index = Math.floor((Math.random() * 100) + 1);
      if (index < alphabets.length) {
        letterHand.push(alphabets[index]);
        limit += 1;
      }
    }
    return letterHand;

    // Implement this method for wave 1
  },


  usesAvailableLetters(input, letterHand) {
    let word = input.toUpperCase().split('');
    if (word.length > letterHand.length) {
      return false;
    } else {
      for (const letter of word) {
        let wordNum = word.filter(x => x == letter).length;
        let handNum = letterHand.filter(x => x == letter).length;
        if (wordNum > handNum) {
          return false;
        }
      }
    }
    return true;
  },

  scoreWord(word) {
    const scoreChart = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10,

    };
    let playWord = word.toUpperCase().split('');
    let total = 0;
    if (playWord.length == 0) {
      return total;
    }
    playWord.forEach(function (letter) {
      total += scoreChart[letter];
    });
    if (playWord.length > 6 && playWord.length < 11) {
      total += 8;
    }
    return total;
  },
  highestScoreFrom(words) {
    let result = {};
    let bestScore = 0;
    let bestWord;
    for(const word of words) {
      if (Adagrams.scoreWord(word) > bestScore) {
        bestScore = Adagrams.scoreWord(word);
        bestWord = word;
      } else if (Adagrams.scoreWord(word) === bestScore) {
        if(bestWord.length === 10) {
          bestWord;
        } else if (word.length === 10) {
          bestWord = word;
        } else {
          if(word.length < bestWord.length) {
            bestWord = word;
          } else {
            bestWord;
          }
        }
      }
        
      }
      result.word = bestWord;
      result.score = bestScore;
      return result;
    }

}








// Do not remove this line or your tests will break!
export default Adagrams;
