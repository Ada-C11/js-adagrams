const _ = require('lodash');
const Adagrams = {

  drawLetters() {
    const letters = [];
    const letter_freq = new Map([['A', 9], ['N', 6], ['B', 2], ['O', 8], ['C', 2], ['P', 2], ['D', 4], ['Q', 1], ['E', 12], ['R', 6], ['F', 2], ['S', 4], ['G', 3], ['T', 6], ['H', 2], ['U', 4], ['I', 9], ['V', 2], ['J',1], ['W', 2], ['K', 1], ['X', 1], ['L', 4], ['Y',2], ['M', 2], ['Z', 1]]);
    for (let [key, value] of letter_freq) {
        for (let i = 0; i < value; i++) {
              letters.push(key);
        }  
    }
    return _.sampleSize(letters, 10)
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length){
      return false;
    }
    let possibleLetters = _.clone(lettersInHand);
    for (let char of input) {
        if (possibleLetters.includes(char)) {
          possibleLetters.splice(possibleLetters.indexOf(char), 1);
        } 
        else {
          return false;
        }
    }
    return true;
  },

  scoreWord(word) {
    const letterScore = new Map([
      ['A', 1], ['N', 1], ['B',3], ['O',1], ['C', 3], ['P', 3], ['D', 2], ['Q', 10], ['E', 1], ['R', 1], ['F', 4], ['S', 1],['G', 2], ['T', 1], ['H', 4], ['U', 1], ['I', 1], ['V', 4], ['J', 8], ['W', 4], ['K', 5], ['X', 8], ['L', 1], ['Y', 4], ['M', 3], ['Z', 10]
    ]);
    let score = 0;
    for (let char of word) {
      score += letterScore.get(char.toUpperCase());
    }
    if (word.length >=7) {
      score += 8;
    }
    return score;
  },

  highestScoreFrom(words) {
    let winner = {
      word: "",
      score: 0,
    };

  for (let word of words) {
    if (this.scoreWord(word) > winner.score){
      winner = { word: word, score: this.scoreWord(word) };
    } 
    else if (this.scoreWord(word) > winner.score){
      if (((word.length < winner.word.length) || (word.length == 10)) && (winner.word.length != 10)) {
        winner = { word: word, score: thisscoreWord(word) };
        }
      }
    }
  return winner;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
