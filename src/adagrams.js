function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

const Adagrams = {
 
  letterArray: ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"],

  drawLetters() {
    let letterHand = shuffle(this.letterArray).slice(0,10);
    return letterHand
  },

  usesAvailableLetters (input, lettersinHand) {
    const lettersinHandHash = {};
    lettersinHand.forEach((letter) => {
      if(lettersinHandHash[letter]) {
        lettersinHandHash[letter] += 1;
      } else {
        lettersinHandHash[letter] = 1;
      }
    });

    for (let i = 0; i < input.length; i += 1) {
      const letter = input[i];
      if (lettersinHandHash[letter] && (lettersinHandHash[letter] > 0)) {
        lettersinHandHash[letter] -= 1;
      } else {
        return false;
      }
    }

    return true; 
  },

  scoreWord (word) {
    const letterPoints = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};
    var score = 0;
    var letter;
   
    for (letter in word) {
      letter = (word[letter]).toUpperCase();
      score += letterPoints[letter];
    }

    if(word.length > 6) {
      score += 8;
    }
    
    return score;
  },
};


// Do not remove this line or your tests will break!
export default Adagrams;
