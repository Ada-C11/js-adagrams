import { arrayExpression } from "@babel/types";

const Adagrams = {
 
  drawLetters() {
    const letterPool = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K:1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 }
    
      const letterArray = [] 
      // call forEach on entries and add it to letterArray
      Object.entries(letterPool).forEach(function (entry){
        const letter = entry[0];
        const value = entry[1];

        for (let i = 0; i < value; i += 1){

          letterArray.push(letter);
        }
      });
      
      const letterHand = [];

      for (let i = 0; i < 10; i += 1){
     
      let randomTen = letterArray[Math.floor(Math.random()*letterArray.length)];   
      
      letterHand.push(randomTen);

    } 
    return letterHand;
    // console.log(letterHand);
  },
  
usesAvailableLetters(input, lettersInHand) {
  
   let letters = lettersInHand;
   const match = true;
   const noMatch = false;

  for (let i = 0; i < input.length; i += 1 ){
    if (letters.includes(input[i])) {
      letters.splice(input[i], 1);
    }else {
        return noMatch;
      }
    }
    return match;
  },

scoreWord(word) {
  let pointValue = {
      'A': 1,'E': 1,'I': 1,'O': 1,'U': 1,'L': 1,'N': 1,
      'R': 1,'S': 1,'T': 1,'D': 2,'G': 2,'B': 3,'C': 3,
      'M': 3,'P': 3,'F': 4,'H': 4,'V': 4,'W': 4,'Y': 4,
      'K': 5,'J': 8,'X': 8,'Q': 10,'Z': 10 
    };

let wordScore = 0;
word = word.toUpperCase().split('');
 
word.forEach(function(letter){
  wordScore += pointValue[letter];
});

if (word.length > 6){
  return wordScore += 8;
} else {
  return wordScore;
} 
},

highestScoreFrom(words){
  let winningWord = {
    word: '',
    score: 0
  };

  // 
return winningWord;
},

}
// console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
export default Adagrams;
