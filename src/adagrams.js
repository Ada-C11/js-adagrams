const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterBank = {
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
    };

    let myLetters = [];

    for (let key in letterBank) {
      while (letterBank[key] > 0) {
        myLetters.push(key);
        letterBank[key] -= 1;
      }
    }

    myLetters.sort(() => Math.random());
    return myLetters.slice(0, 10);
  },

  usesAvailableLetters(word, drawn) {
    const handMap = {};
    drawn.forEach(letter => {
      if (handMap[letter]) handMap[letter] += 1;
      else handMap[letter] = 1;
    });
    console.log(handMap);
    //use a for loop (if/else statement) to make sure they have all the letters in input and if they do, decrement the value of the letter so that they've spent it
    for (let i = 0; i < word.length; i += 1) {
      if (hand[word[i]]) hand[word[i]] -= 1;
      else return false;
    }
    return true;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;
