// import { strict } from "assert";

const Adagrams = {
//WAVE 1:
  drawLetters() {
// Set up hash of letters w/ frequency 
    const letterFrequencies = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3,
      'H': 2, 'I': 9, 'J': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8,
      'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2,
      'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    };
// WAVE 1 -->
// use entries 
// creating the empty lettersPool array 
    const lettersPool = [];
// loop through frequencies to push letters to lettersPool 
// entries will be an array of arrays w/ letter + count in each array 
    const entries = Object.entries(letterFrequencies);
    entries.forEach(entry => {
      letter = entry[0];
      count = entry[1];
// adding a letter into the array, w/ for loop to add the letter count number of times 
      for (let i = 0; i < count; i += 1) {
        lettersPool.push(letter)
      }
    });
// empty array for hand of 10 random letters from lettersPool 
    let handLetters = [];
// for loop to draw hand of 10 random letters - ex. in animalsounds.js
// initialization - condition - increment 
    for (let i = 0; i < 10; i += 1) {
// define letter to pull 10 random letters
// pulling letters will not change lettersPool for future draws - ex. in tips.js
//use Math.floor to round correctly and not return NaN
      let letter = lettersPool[Math.floor(Math.random() * (lettersPool.length))];
// push 10 selected letters into array 
      handLetters.push(letter);
    }
// return array to player - explicit return 
    return handLetters;
  },
// check function

// WAVE 2: check if the word only uses some/all letters from handLetters array 
// method (usesAvailableLetters w/ 2 parameters (input + lettersInHand))
// input is a string for input word from player
// lettersInHand is an array of 10 strings - each string is a letter 
  usesAvailableLetters(input, lettersInHand) {
// copying lettersInHand array so that it can be changed w/o changing original array 
    let letters = lettersInHand;
// initialization - condition - increment 
    for (let i = 0; i < input.length; i += 1) {
// check for input and use indexOf method (tells index in the string where letter is- if letter not found- returns -1 so will be false) 
// splice method (add/subtract - permanently changes array - to prevent false positive)
// return true if every letter in the input word is available in correct quantity from lettersInHand 
      let letter = letters.indexOf(input[i]);
      if (letter === -1) {
        return false;
      } else {
        letters.splice(letter, 1);
      }
      return true;
   } 
  },
// WAVE 3: RETURN SCORE
// create a function called scoreWord w/ word parameter 
  scoreWord(word) {
// set up hash of letters w/ score value - like letterFrequencies 
    const letterValues = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 
      'S': 1, 'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 
      'F': 4, 'H': 4, 'V': 4, 'W': 4,'Y': 4, 'K': 5, 'J': 8, 'X': 8, 
      'Q': 10, 'Z': 10, 
    };
// each letter has point value and gets summed up for score
// add 8 pts if word is 7, 8, 9, or 10 length 
    let score = 0; 
    if (word.length >= 7 && word.length < 11) {
      score = 8;
    }; 
// make the word into an array of strings w/ each letter as a string 
// use forEach like in tips.js - more concise than just for 
// use arrow function to minimize syntax in forEach - make 1 line instead of 3
    word.split('').forEach(ltr => {
// [ltr] for key in hash 
      score += letterValues[ltr];
    });
    return score; 
  },
  // WAVE 4: highest scoring word
// new function - highestScoreFrom w/ 1 parameter- words- an array of strings
highestScoreFrom(words);
// returns a single hash that represents 
// check if working TODO - make sure works even w/o cap. letters + function to get user input 
  runProg() {
    const myLet = this.drawLetters();
    console.log(myLet);
    return this.usesAvailableLetters('A', myLet);
  }
}  

  console.log(Adagrams.runProg());









// Do not remove this line or your tests will break!
export default Adagrams;

