const Adagrams = {
  drawLetters() {
    const letterPool = [];

    for (let i = 0; i < 9; i += 1) {
      letterPool.push('A');
      letterPool.push('I');
    }

    for (let i = 0; i < 2; i += 1) {
      letterPool.push('B');
      letterPool.push('C');
      letterPool.push('F');
      letterPool.push('H');
      letterPool.push('M');
      letterPool.push('P');
      letterPool.push('V');
      letterPool.push('W');
      letterPool.push('Y');
    }

    for (let i = 0; i < 4; i += 1) {
      letterPool.push('D');
      letterPool.push('L');
      letterPool.push('S');
      letterPool.push('U');
    }

    for (let i = 0; i < 12; i += 1) {
      letterPool.push('E');
    }

    for (let i = 0; i < 3; i += 1) {
      letterPool.push('G');
    }
  
    letterPool.push('J');
    letterPool.push('K');
    letterPool.push('Q');
    letterPool.push('X');
    letterPool.push('Z');

    for (let i = 0; i < 6; i += 1) {
      letterPool.push('N');
      letterPool.push('R');
      letterPool.push('T');
    }

    for (let i = 0; i < 8; i += 1) {
      letterPool.push('O');
    }

    let playerHand = [];

    for (let i = 0; i < 10; i += 1) {
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
        if (word.length == 10 && winningWord.length != 10 ) {
          winningWord = word;
        } else if  (word.length != 10 && winningWord.length == 10 ) {
          winningWord = winningWord;
        } else {
          if (word.length < winningWord.length) {
            winningWord = word;
          }
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
