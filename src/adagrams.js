const Adagrams = {
  drawLetters() {
    const letterPool = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, 
                        J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, 
                        S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };
    let allLetterArray = [];
    let letterArray = [];

    for (let key in letterPool){
      for( let i = 0; i < letterPool[key]; i += 1){
        allLetterArray.push(key);
      }
    } 
    
    for (let i = 0; i < 10; i += 1){
      letterArray.push(allLetterArray[Math.floor ( Math.random() * allLetterArray.length )]);
    }
    return letterArray;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    let inputLetters = [];
    let size = 0;
    
    inputArray.forEach(letter => {
      if(lettersInHand.includes(letter)== true){
        lettersInHand.splice((lettersInHand.indexOf(letter)),1);
        inputLetters.push(letter);
        size +=1; 
      }
    });

    lettersInHand.concat(inputLetters);
    if (size === input.length){
      return true;
    } else {
      return false;
    }
  },

  scoreWord(word){
    let points = 0
    const letterScores = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, 
                          J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, 
                          S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
    word.toUpperCase().split('').forEach(letter => {
      points += letterScores[letter];
    });
    if (word.length >= 7){
      points += 8;
    }
    return points;
  },

  highestScoreFrom(words){
    let winning = {};
    let bestScore = 0;
    let bestWord;
    words.forEach( word => { 
      if (Adagrams.scoreWord(word) > bestScore){
        bestScore = Adagrams.scoreWord(word);
        bestWord = word;
      } else if (Adagrams.scoreWord(word) === bestScore) {
          if (bestWord.length === 10){
            bestWord;
          } else if (word.length === 10) {
            bestWord = word;
          } else if (word.length < bestWord.length){
            bestWord = word;
          }
      }
    });
    winning.word = bestWord;
      winning.score = bestScore;
      return winning;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;