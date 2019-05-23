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
}

// put keys into an array ['A'..'Z']
const letters = Object.keys(letterQuantities)

// then loop over keys array; access letter Quantities key
// and put the key (the letter) into letterTiles array 'value' number of times  

let letterTiles = []

letters.forEach( function makeLetterTiles(letter) {
  // this could probably be a .map, too
  let numberOfLetter = letterQuantities[letter];
  let tempString = letter.repeat(numberOfLetter);
  letterTiles = letterTiles.concat(tempString.split(''));
})
console.log('letter tiles: ', letterTiles);


// the above code should make this...
// letterTiles: ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z']
// ***********************************

// ANOTHER APPROACH:
// randomly pick a key from keys array until hand.length === 10
// as you pick a key, -=1 value
// ...but how do you reset the hash for each word?
// ***********************************



const letterScores = {
    '1': ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    '2': ["D", "G"],
    '3': ["B", "C", "M", "P"],
    '4': ["F", "H", "V", "W", "Y"],
    '5': ["K"],
    '8': ["J", "X"],
    '10': ["Q", "Z"],
  }


  
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
    console.log('letters in hand: ' + lettersInHand)
    return lettersInHand;
  },

  
  usesAvailableLetters(input, lettersInHand) {
    
    // Return true if each letter in input is the same and in the same quantity of lettersInHand
    
  }
};

Adagrams.drawLetters();
// Do not remove this line or your tests will break!
// export default Adagrams;
