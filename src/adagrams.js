import { join } from "path";
import { Z_ASCII } from "zlib";

const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
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

    const letters = [];
    for(let letter in letters) {
      for(let i = 0; i < pool[letter]; i += 1) {
        hand.push(letter);
      }
    }

    let hand = [];
    for(let i = 0; i < 10; i += 1) {
      const letterIndex = Math.floor(Math.random() * (letters.length));
      hand.push(letters[letterIndex]);
      letters.splice(letterIndex, 1);
    }

    return hand;
  },
  }

// Do not remove this line or your tests will break!
export default Adagrams;
