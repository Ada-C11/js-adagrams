import { worker } from "@jest/reporters/build/coverage_worker";

const alphaLetters = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1
};

const scoreChart = {
  A: 1,
  N: 1,
  B: 3,
  O: 1,
  C: 3,
  P: 3,
  D: 2,
  Q: 10,
  E: 1,
  R: 1,
  F: 4,
  S: 1,
  G: 2,
  T: 1,
  H: 4,
  U: 1,
  I: 1,
  V: 4,
  J: 8,
  W: 4,
  X: 8,
  K: 5,
  L: 1,
  Y: 4,
  M: 3,
  Z: 10
};

const createLetters = function(alphaLetters) {
  let lettersArray = [];
  for (let key in alphaLetters) {
    const result = key.repeat(alphaLetters[key]).split("");
    lettersArray = lettersArray.concat(result);
  }
  return lettersArray;
};

const Adagrams = {
  drawLetters() {
    const allLetters = createLetters(alphaLetters);
    const letterCopy = allLetters.slice(0);
    const rand = [];
    for (let i = 0; i < 10 && i < letterCopy.length; i += 1) {
      let index = Math.floor(Math.random() * letterCopy.length);
      rand.push(letterCopy.splice(index, 1)[0]);
    }
    return rand;
  },

  usesAvailableLetters(input, lettersInHand = []) {
    let isValid = true;
    const letters = input.split("");
    letters.forEach(letter => {
      if (!lettersInHand.includes(letter)) {
        isValid = false;
      } else {
        const index = lettersInHand.indexOf(letter);
        lettersInHand.splice(index, 1);
      }
    });
    return isValid;
  },

  scoreWord(word = []) {
    let score = word.length > 6 ? 8 : 0;
    const splitWord = word.split("");
    splitWord.forEach(letter => {
      if (scoreChart[letter.toUpperCase()]) {
        score += parseInt(scoreChart[letter.toUpperCase()], 10);
      } else {
        score += 0;
      }
    });
    return score;
  },

  highestScoreFrom(words = []) {
    const bestWordHash = {
      word: "",
      score: 0
    };
    let bestWord = "";
    let bestScore = 0;

    words.forEach(madeWord => {
      if (this.scoreWord(madeWord) > bestScore) {
        bestScore = this.scoreWord(madeWord);
        bestWord = madeWord;
      } else if (this.scoreWord(madeWord) === bestScore) {
        if (bestWord.length < madeWord.length && madeWord.length === 10) {
          bestWord = madeWord;
          bestScore = this.scoreWord(madeWord);
        } else if (bestWord.length > madeWord.length && bestWord.length < 10) {
          bestWord = madeWord;
          bestScore = this.scoreWord(madeWord);
        }
      }
    });
    bestWordHash.word = bestWord;
    bestWordHash.score = bestScore;
    return bestWordHash;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
