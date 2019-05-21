const Adagrams = {
  drawLetters() {
    // const availableHand = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"]

    const availableHand = []
    for (let i = 0; i < 9; i++) {
      availableHand.push("a");
      availableHand.push("i");
    }

    for (let i = 0; i < 2; i++) {
      availableHand.push("b");
      availableHand.push("c");
      availableHand.push("f");
      availableHand.push("h");
      availableHand.push("m");
      availableHand.push("p");
      availableHand.push("v");
      availableHand.push("w");
      availableHand.push("y");
    }

    for (let i = 0; i < 4; i++) {
      availableHand.push("d");
      availableHand.push("l");
      availableHand.push("s");
      availableHand.push("u");
    }

    for (let i = 0; i < 12; i++) {
      availableHand.push("e");
    }

    for (let i = 0; i < 3; i++) {
      availableHand.push("g");
    }

    for (let i = 0; i < 1; i++) {
      availableHand.push("j");
      availableHand.push("k");
      availableHand.push("q");
      availableHand.push("x");
      availableHand.push("y");
    }
    
    for (let i = 0; i < 6; i++) {
      availableHand.push("n");
      availableHand.push("r");
      availableHand.push("t");
    }

    for (let i = 0; i < 8; i++) {
      availableHand.push("o");
    }
  
    const hand = []

    for (let i = 0; i < 10; i++) {
      hand.push(availableHand[Math.floor(Math.random() * availableHand.length)].toUpperCase())
    }

    return hand
  },
  usesAvailableLetters (input, lettersInHand) {
    for (let character of input) {
      let index = lettersInHand.indexOf(character);
      if (index === -1) {
        return false;
      } else {
        lettersInHand.splice(index, 1);
      }
    };
    return true;
  },
  scoreWord (word) {
   const scoreChart = {
      "a":1,
      "b":3,
      "c":3,
      "d":2,
      "e":1,
      "f":4,
      "g":2,
      "h":4,
      "i":1,
      "j":8,
      "k":5,
      "l":1,
      "m":3,
      "n":1,
      "o":1,
      "p":3,
      "q":10,
      "r":1,
      "s":1,
      "t":1,
      "u":1,
      "v":4,
      "w":4,
      "x":8,
      "y":4,
      "z":10
    }

    let score = 0

    for (let character of word) {
      score += scoreChart[character.toLowerCase()];
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
