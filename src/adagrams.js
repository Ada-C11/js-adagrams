const Adagrams = {
  drawLetters() {
    const available_letters = {
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

    let letterHash = [];
    for (let key in available_letters) {
      while (available_letters[key] > 0) {
        letterHash.push(key);
        available_letters[key] -= 1;
      };
    };
    
    let drawnLetters = [];
    for (let i = 0; i < 10; i += 1) {
      let randIndex = Math.floor(Math.random()*letterHash.length);
      drawnLetters.push(letterHash[randIndex]);
      letterHash.splice(randIndex, 1);
    };

    return drawnLetters;
  },

  usesAvailableLetters(input, letterInHand) {
    for (let i = 0; i < input.length; i += 1) {
      if (letterInHand.includes(input.charAt(i))) {
        letterInHand.splice(input.charAt(i), 1);
      } else {
        return false;
      };
    };
    return true;
  },
};

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
