const Adagrams = {
  drawLetters() {
    const letterPool = [];

    const adagramsCount = {
       'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    };

    for (let key in adagramsCount) {
      for (let i = 0; i < adagramsCount[key]; i++) {
        letterPool.push(key);
      }
    }

    let playerHand = [];

    for (let i = 0; i < 10; i++) {
      let randLetter = letterPool[Math.floor(Math.random() * letterPool.length)];
      playerHand.push(randLetter);
    }

    return playerHand;
    // Implement this method for wave 1
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    let letters = lettersInHand

    for (let i = 0; i < input.length; i++) {
      if (letters.includes(input[i])) {
        letters.splice(input[i], 1);
      } else {
        return false;
      }
    }

    return true;  
  }, 

  scoreWord(word) {
    word = word.toUpperCase();
    let score = 0;

    const letterScores = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4, 'V': 4, 'W': 4,'Y': 4, 'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10, 
    };

    for (let i = 0; i < word.length; i++) {
      score += letterScores[word[i]];
    }

    if (word.length > 6) {
      score += 8;
    }

    return score;
  }, 

  highestScoreFrom(words) {
    let maxScore = 0;
    let winningWord = '';

    for (let word of words) {
      if (this.scoreWord(word) > maxScore) {
        maxScore = this.scoreWord(word);
        winningWord = word; 
      }

      if (maxScore == this.scoreWord(word)) {
        if ((word.length == 10 && winningWord.length != 10 ) || (word.length < winningWord.length && winningWord.length != 10)) {
          winningWord = word;
        } 
      }
    }

    let winner = {
      word: winningWord, 
      score: maxScore
    };

    return winner;
  }
  
};

// Do not remove this line or your tests will break!
export default Adagrams;
