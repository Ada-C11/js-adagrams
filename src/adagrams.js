import { ENGINE_METHOD_DIGESTS } from "constants";

const hashIntoObject = arrOfLetters => {
  let object = {};
  arrOfLetters.forEach(letter => {
    object[letter] ? object[letter] += 1 : object[letter] = 1;
  });
  return object;
}

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'.split('');
    let lettersInHand = [];
    
    for (let i = 0; i < 10; i += 1) {
      const randomIndex = Math.floor(Math.random() * letterPool.length);
      lettersInHand.push(letterPool[randomIndex]);
      letterPool.splice(randomIndex, 1);
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let lettersObject = hashIntoObject(lettersInHand);
    
    for (let i = 0; i < input.length; i += 1) {
      if (!lettersObject[input[i]] || lettersObject[input[i]] <= 0) return false;

      lettersObject[input[i]] -= 1;
    }
    return true;
  },

  scoreWord(word) {
    let score = 0;
    if (word.length >= 7) {
      score += 8;
    }
    word.toUpperCase().split('').forEach( (letter) => {
      switch(letter) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
          score += 1;
          break;
        case 'D':
        case 'G':
          score += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'K':
          score += 5;
          break;
        case 'J':
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
      }
    });
    return score;
  },

  highestScoreFrom(words) {
    let winningWord = "";
    let winningScore = 0;
    for (let i in words) {
      let currWord = words[i];
      let currScore = Adagrams.scoreWord(currWord);
      if (currScore > winningScore) {
        winningWord = currWord;
        winningScore = currScore;
      }
      if (currScore == winningScore) {
        if (winningWord.length < 10 && 
          (currWord.length == 10 ||
            currWord.length < winningWord.length)) {
          winningWord = currWord;
          winningScore = currScore;
        } 
      }
    }
    const winningObj = { word: winningWord, score: winningScore };
    return winningObj;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
