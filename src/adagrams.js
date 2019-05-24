import { exportDefaultSpecifier } from '@babel/types';

const _ = require('lodash');

const Adagrams = {
  drawLetters() {

    const letterArray = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];


    const lettersInHand = _.sampleSize(letterArray, 10);

    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const letterVerify = {};

    lettersInHand.forEach((letter) => {
      if (letterVerify[letter] !== undefined) {
        letterVerify[letter] += 1
      } else {
        letterVerify[letter] = 1;
      }
    });

    const word = input.toUpperCase().split('');

    let passes = true;
    word.forEach((char) => {
      if (letterVerify[char] === undefined) {
        passes = false;
      } else {
        if (letterVerify[char] <= 0) {
          passes = false;
        } else {
          letterVerify[char] -= 1;
        }
      }
    });

    return passes;

  },

  scoreWord(word) {

    const point1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    const point2 = ['D', 'G'];
    const point3 = ['B', 'C', 'M', 'P'];
    const point4 = ['F', 'H', 'V', 'W', 'Y'];
    const point5 = ['K'];
    const point8 = ['J', 'X'];
    const point10 = ['Q', 'Z'];

    const letterValue = {};

    point1.forEach(letter => letterValue[letter] = 1);

    point2.forEach(letter => letterValue[letter] = 2);

    point3.forEach(letter => letterValue[letter] = 3);

    point4.forEach(letter => letterValue[letter] = 4);

    point5.forEach(letter => letterValue[letter] = 5);

    point8.forEach(letter => letterValue[letter] = 8);

    point10.forEach(letter => letterValue[letter] = 10);

    const wordArray = word.toUpperCase().split('');
    let score = 0;

    wordArray.forEach(char => score += letterValue[char]);

    if (wordArray.length > 6) {
      score += 8
    }

    return score;

  },

  highestScoreFrom(words) {

    let highestScore = 0;

    words.forEach((word) => {
      if (this.scoreWord(word) > highestScore) {
        highestScore = this.scoreWord(word);
      }
    });

    const arrHighScore = [];

    words.forEach((word) => {
      if (this.scoreWord(word) === highestScore) {
        arrHighScore.push(word);
      }
    });


    let storeLength = arrHighScore[0].length;
    let storeWord = arrHighScore[0];

    for (let i in arrHighScore) {
      if (arrHighScore[i].length == 10) {
        storeWord = arrHighScore[i];
        break;
      } else {
        if (arrHighScore[i].length < storeLength) {
          storeLength = arrHighScore[i].length;
        storeWord = arrHighScore[i];
        }
      }
    };

    const winningWord = {
      word: storeWord,
      score: highestScore
    };

    return winningWord;

  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
