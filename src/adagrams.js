const Adagrams = {
  drawLetters() {
    const letterFrequencies = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
      'H': 2, 'I': 9, 'J': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8,
      'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2,
      'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    };
    const lettersPool = [];
    const entries = Object.entries(letterFrequencies);
    entries.forEach(entry => {
      const letter = entry[0];
      const count = entry[1];
      for (let i = 0; i < count; i += 1) {
        lettersPool.push(letter);
      }
    });

    let handLetters = [];
    for (let i = 0; i < 10; i += 1) {
      let letter = lettersPool[Math.floor(Math.random() * (lettersPool.length))];
      handLetters.push(letter);
    }
    return handLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i += 1) {
      let letter = lettersInHand.indexOf(input[i]);
      if (letter === -1) {
        return false;
      } else {
        lettersInHand.splice(letter, 1);
      }
    }
    return true;
  },

  scoreWord(word) {
    const letterValues = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 
      'S': 1, 'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 
      'F': 4, 'H': 4, 'V': 4, 'W': 4,'Y': 4, 'K': 5, 'J': 8, 'X': 8, 
      'Q': 10, 'Z': 10, 
    }; 
    word = word.toUpperCase();
    let score = 0; 
    if (word.length >= 7 && word.length < 11) {
      score = 8;
    }; 
    word.split('').forEach(letter => {
      if (!letterValues.hasOwnProperty(letter)) {
        return null;
      }
      score += letterValues[letter];
    });
    return score; 
  },

  breakTie(first, second) {
      if (first.length == second.length) {
        return first;
      } else if (first.length == 10) {
        return first;
      } else if (second.length == 10) {
        return second;
      };
      return first.length < second.length ? first : second;
    },

  highestScoreFrom(words) {
    let highScore = 0;
    let word = "";
    for (let i = 0; i < words.length; i += 1) {
      const score = this.scoreWord(words[i]);
      if (score > highScore) {
        highScore = score;
        word = words[i];
      } else if (score == highScore) {
      word = this.breakTie(word, words[i]);
    }
  }
  return {word: word, score: highScore}; 
},
};

export default Adagrams;
