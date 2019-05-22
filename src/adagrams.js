const Adagrams = {
  drawLetters() {
    const letterPool = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };
    let allLetterArray = [];
    let letterArray = [];

    for (let key in letterPool){
      for( let i = 0; i < letterPool[key]; i += 1){
        allLetterArray.push(key);
      }
    } 

    console.log(allLetterArray);
    
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
    word.toUpperCase().split('').forEach(letter => {
      switch (letter) {
        case "A": case "E": case "I": case "O": case "U": case "L": case "N": case "R": case "S": case "T":
          points += 1;
          break;
        case "D": case "G":
          points += 2;
          break;
        case "B": case "C": case "M": case "P":
          points += 3;
          break;
        case "F": case "H": case "V": case "W": case "Y":
          points += 4;
          break;
        case "K":
          points += 5;
          break;
        case "J": case "X":
          points += 8;
          break;
        case "Q": case "Z":
          points += 10;

      }
    });
    if (word.length > 6 && word.length < 11){
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


  
// result = Adagrams.highestScoreFrom(['a','ba','aaaa']);

// console.log(result);