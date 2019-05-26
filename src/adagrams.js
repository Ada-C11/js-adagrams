const letterQuantities = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1,
};

// put keys into an array ['A'..'Z']
const letters = Object.keys(letterQuantities);

// then loop over keys array; access letter Quantities key
// and put the key (the letter) into letterTiles array 'value' number of times  

let letterTiles = [];

letters.forEach( function makeLetterTiles(letter) {
  // this could probably be a .map, too
  let numberOfLetter = letterQuantities[letter];
  let tempString = letter.repeat(numberOfLetter);
  letterTiles = letterTiles.concat(tempString.split(''));
  // forEach always returns undefined
});
// console.log('letter tiles: ', letterTiles);


// the above code should make this...
// letterTiles: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']
// ***********************************

// ANOTHER APPROACH:
// randomly pick a key from keys array until hand.length === 10
// as you pick a key, -=1 value
// ...but how do you reset the hash for each word?
// ***********************************


const BONUS_POINTS = 8;

const letterScores = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M': 3, 'P': 3,
  'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10,
};



const Adagrams = {
  drawLetters() {
    let lettersInHand = []
    let i = 0;
    while (i<10) {
      let randomIndex = Math.floor(Math.random() * letterTiles.length);
      
      if (letterTiles[randomIndex] != null){
        lettersInHand.push(letterTiles[randomIndex]);
        letterTiles[randomIndex] = null;
        i += 1;
      }
    }
    // console.log('letters in hand: ' + lettersInHand)
    return lettersInHand;
  },


  usesAvailableLetters(inputWord, lettersInHand) {
    
    // Return true if each letter in input is the same and in the same quantity of lettersInHand
    const inputLetters = inputWord.split('');
    const handCopy = lettersInHand.slice(0);
    // make a copy of lettersInHand array that can be modified
    // console.log(`inputLetters: ${inputLetters}`);
    // console.log(`handCopy: ${handCopy}`);
    // console.log(`inputWord: ${inputWord}`);
    
    if (inputLetters.length > lettersInHand.length) {
      return false;
    } else {    
      // let contains = letter => {
        
        // } 
        
      let isValid = true;
      inputLetters.forEach((letter) => {
        // console.log('***********************************');
        if (handCopy.includes(letter)){
          // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
          let letterIndex = handCopy.indexOf(letter);
          delete handCopy[letterIndex]; 
          // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
          // console.log(`true handCopy: ${handCopy}`);
        } else {
          // console.log(`false input: ${inputWord}`)
          // console.log(`false handCopy: ${handCopy}`);
          isValid = false;
        } 
      });
      if (isValid) {
        // console.log('returning true');
        return true;
      } else {
        return false;
      }
    }   
  },
  
  
  scoredWords: {
    // 'A': 1,
    // 'DOG': 5,
    // 'WHIMSY': 17
  }, 
  
  scoreWord(inputWord) {
    // maybe use .charAt(index)
    const wordArray = inputWord.toUpperCase().split('');
    let wordPoints = 0;

    if (inputWord.length > 6) wordPoints += BONUS_POINTS;
    // console.log(`wordArray: ${wordArray}`)
    
    wordArray.forEach(function(letter) {
      wordPoints += letterScores[letter];
    });
    
    // if (this){
    //   this.scoredWords[inputWord.toUpperCase()] = wordPoints;
    // }

    return wordPoints;
    
  },
  
  highestScoreFrom (words) {
    console.log(`******* scoredWords: *************`);
    console.log(this.scoredWords);
    
    // words.forEach(word =>{
    //   this.scoreWord(word);
    // });

    words.forEach((word) => {
      this.scoredWords[word.toUpperCase()] = this.scoreWord(word);
    });

    console.log(this.scoredWords);
    console.log('**********************')



    let bestWord = words[0];
    let bestScore = this.scoredWords[bestWord];

    words.forEach( (word) => {
      if (this.scoredWords[word] > bestScore) {
        bestWord = word;
        bestScore = this.scoredWords[word];
      }
    });

    return {
      'word': bestWord, 
      'score': bestScore
    };
    
  },
  
  // log: function(){console.log(`scoredWords: ${this.scoredWords}`);}
  
};

// Adagrams.drawLetters();
// Do not remove this line or your tests will break!
export default Adagrams;
