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
  }
};


// Do not remove this line or your tests will break!
export default Adagrams;
