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
    return lettersInHand;
  },

  usesAvailableLetters(inputWord, lettersInHand) {
    
    // Return true if each letter in input is the same and in the same quantity of lettersInHand
    const inputLetters = inputWord.split('');
    const handCopy = lettersInHand.slice(0);
    
    if (inputLetters.length > lettersInHand.length) {
      return false;
    } else {         
      let isValid = true;
      inputLetters.forEach((letter) => {
        
        if (handCopy.includes(letter)){
          // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
          let letterIndex = handCopy.indexOf(letter);
          delete handCopy[letterIndex]; 
          // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        } else {
          isValid = false;
        } 
      });
      if (isValid) {
        return true;
      } else {
        return false;
      }
    }   
  },
  
  savedWords: { }, 
  
  scoreWord(inputWord) {
    // this function is passed by reference to the map function in the spec file as Adagrams.scoreWord
    // doing so causes scoreWord to 'lose context': 'this' becomes undefined
    // It is vital that scoreWord does not reference 'this'

    const wordArray = inputWord.toUpperCase().split('');
    let wordPoints = 0;

    if (inputWord.length > 6) wordPoints += BONUS_POINTS;
    
    wordArray.forEach(function(letter) {
      wordPoints += letterScores[letter];
    });

    return wordPoints;
  },
  
  highestScoreFrom (words) {
    // console.log(`******* savedWords: *************`);
    // console.log(this.savedWords);

    // loop through array of incoming words
    // score each one and add the word: score pair to savedWords object
    words.forEach((word) => {
      this.savedWords[word.toUpperCase()] = this.scoreWord(word);
    });
    // ^^^^ see line 104 of spec file
    // this needs to be in highestScoreFrom
    // if not, you get hours of investigating one error
    // this.savedWords --- cannot read property savedWords of undefined

    let bestWord = '';
    let bestWordLength = 0;
    let bestScore = 0;

    words.forEach( (word) => {
      let thisWordLength = word.length;

      if (this.savedWords[word] > bestScore) {
        bestWord = word;
        bestScore = this.savedWords[word];
        bestWordLength = thisWordLength;
      } else if (this.savedWords[word] === bestScore) {
        if (thisWordLength === 10 && bestWordLength < 10) {
          bestWord = word;
          bestScore = this.savedWords[word];
          bestWordLength = thisWordLength;
        } else if (thisWordLength < bestWordLength && bestWordLength < 10) {
          bestWord = word;
          bestScore = this.savedWords[word];
          bestWordLength = thisWordLength;
        }
      }
    });

    return {
      'word': bestWord, 
      'score': bestScore
    };
    
  },
  
};

// Adagrams.drawLetters();
// Do not remove this line or your tests will break!
export default Adagrams;
