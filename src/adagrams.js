const Adagrams = {
  drawLetters() {
    const allLetters = { A: 9, B: 2, C:2, D:4, E:12, F:2, 
      G:3, H:2, I:9, J: 1, K:1, L:4, M: 2, N:6, O:8, P:2, Q:1, R:6, S:4,
      T:6, U:4, V:2, W:2, X:1, Y:2, Z:1
    }

    const wordArray = []
    for (let letter in allLetters) {
      for (let i = 0; i < allLetters[letter]; i += 1) {
        wordArray.push(letter);
      }
    }

    const lettersInHand = []
    for (let j = 0; j < 10; j += 1) {
      const randomLetter = wordArray[(Math.floor(Math.random() * 26 ))];
      lettersInHand.push(randomLetter);
    }
    return lettersInHand;
  },
  usesAvailableLetters(input, lettersDrawn){
    for (ltr in input) {
    
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;


// if(!lettersDrawn.includes(input[ltr]) {
//   return false
// } else {
//   let found = lettersDrawn.splice(ltr)
// }
// }
// if(found.length === input.length) {
// return true
// }