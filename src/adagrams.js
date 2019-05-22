// import { join } from "path";
// import { Z_ASCII } from "zlib";
const Adagrams = {
  drawLetters() {
    const pool = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }

    // don't alter orginal array by creating new array and pushing letters into it
    let letters = [];
    for(let letter in pool) {
      for(let i = 0; i < pool[letter]; i += 1) {
        letters.push(letter);
      }
    }

    let hand = [];
    for(let i = 0; i < 10; i += 1) {
      const randomLetterIndex = Math.floor(Math.random() * (letters.length));
      hand.push(letters[randomLetterIndex]);
      letters.splice(randomLetterIndex, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i += 1) {
      let letter = input.charAt(i)
      if (!lettersInHand.includes(letter))
        return false;
    }
  },

  // usesAvailableLetters(input, lettersInHand) {
  //   for (let i = 0; i < input.length; i += 1) {
  //     let letter = input.charAt(i);
  //     if (!lettersInHand.includes(letter)) {
  //       return false;
  //     }
  //     let letterIndex = lettersInHand.indexOf(letter);
  //     lettersInHand.splice(letterIndex, 1);
  //   }
  // },
      

  }
  console.log(Adagrams.drawLetters());

// Do not remove this line or your tests will break!
// export default Adagrams;
