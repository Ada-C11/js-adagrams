const _ = require('lodash');

const Adagrams = {
  drawLetters() {
    // const availLetters = {
    //   A: 9,
    //   B: 2,
    //   C: 2,
    //   D: 4,
    //   E: 12,
    //   F: 2,
    //   G: 3,
    //   H: 2,
    //   I: 9,
    //   J: 1,
    //   K: 1,
    //   L: 4,
    //   M: 2,
    //   N: 6,
    //   O: 8,
    //   P: 2,
    //   Q: 1,
    //   R: 6,
    //   S: 4,
    //   T: 6,
    //   U: 4,
    //   V: 2,
    //   W: 2,
    //   X: 1,
    //   Y: 2,
    //   Z: 1,
    // }

    const letterArray = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"];

   
const lettersInHand = _.sampleSize(letterArray, 10);

return lettersInHand;
  },

usesAvailableLetters(input, lettersInHand) {
const letterVerify = {};

lettersInHand.forEach (function(letter) {
  if (letterVerify[letter] !== undefined) {
    letterVerify[letter] += 1
  } else {
    letterVerify[letter] = 1;
  }
});

const word = input.toUpperCase().split('');

let passes = true;
word.forEach( function(char) {
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

point1.forEach (function(letter) {
  letterValue[letter] = 1;
});

point2.forEach (function(letter){
  letterValue[letter] = 2;
});

point3.forEach (function(letter){
  letterValue[letter] = 3;
});

point4.forEach (function(letter){
  letterValue[letter] = 4;
});

point5.forEach (function(letter){
  letterValue[letter] = 5;
});

point8.forEach (function(letter){
  letterValue[letter] = 8;
});

point10.forEach (function(letter){
  letterValue[letter] = 10;
});


const wordArray = word.toUpperCase().split('');
let score = 0;
wordArray.forEach (function(char){
  score += letterValue[char];
});

return score;


},
};

// Do not remove this line or your tests will break!
export default Adagrams;
