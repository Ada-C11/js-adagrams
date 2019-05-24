const Adagrams = {
  drawLetters() {
    //Populate letterBank array with available letters
    const letters = { A: 9, B: 2, C: 2, D: 4, E: 12, 
    F: 2, G: 3, H: 2, I: 9, J: 1,
    K: 1, L: 4, M: 2, N: 6, O: 8,
    P: 2, Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};

    const letterBank = []
    let lettersLength = Object.keys(letters).length

    for (let i = 0; i < lettersLength; i += 1) {

      let letterCount = Object.values(letters)[i];
      let letter = Object.keys(letters)[i];

      while (letterCount > 0) {
        letterBank.push(letter);
        letterCount -= 1;
      }
    }

    let randomLetters = [];
    let letterBankCopy = letterBank.slice();

    for ( let i = 0; i < 10; i += 1 ) {
      let randIndex = Math.floor(Math.random() * letterBankCopy.length);
      
      randomLetters.push(letterBankCopy[randIndex]);
      letterBankCopy.splice(randIndex, 1);
    } 
    return randomLetters;
  },

  usesAvailableLetters(input,lettersInHand) {
    let length = lettersInHand.length
    
    if (length < 10 || length == 10) {
      let i = 0
      while (i < input.length) {
        
        if (!lettersInHand.includes(input[i])) {
          return false;
        }
        let letterInHandIndex = lettersInHand.indexOf(input[i]);
        lettersInHand.splice(letterInHandIndex,1);
        i += 1;
      }
      
      return true;
    }
    else {
        return false;
    }
  },

  scoreWord(word) {
    let score = 0;
    const letterScore = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2, 
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
    };

    let letterArray = word.toUpperCase().split('');

    letterArray.forEach(char => {
      score += letterScore[char];
    });

    if (letterArray.length > 6) {
        score += 8;
    }

    return score

  },

  highestScoreFrom(stringArray) {
    let scoresArray = []
    let winningWordArray = []
    stringArray.forEach(string => {
      scoresArray.push(Adagrams.scoreWord(string))
    });
    
    let i = 0
    let maxScore = scoresArray[0]
   
    while (i < scoresArray.length) {
      if (maxScore < scoresArray[i]) {
        maxScore = scoresArray[i];
      }
      i += 1;
    }
    
    let j = 0
    while (j < scoresArray.length) {
      if (scoresArray[j] == maxScore) {
        winningWordArray.push(stringArray[j]);
      }
      j += 1;
    }

    let winningWord = winningWordArray[0];
    let wordMinLength = winningWordArray[0].length;

    for (let n = winningWordArray.length - 1; n >= 0; n -= 1) {
      if (winningWordArray[n].length == 10) {
        winningWord = winningWordArray[n];
        continue;
      }
      else if (wordMinLength > winningWordArray[n].length) {
        wordMinLength = winningWordArray[n].length;
        winningWord = winningWordArray[n];
        } 
    }
  
    let winningWordHash = {
      word: winningWord,
      score: maxScore,
    }
    return winningWordHash

  }  
    
};

// Do not remove this line or your tests will break!
export default Adagrams;
