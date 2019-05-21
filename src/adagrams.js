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
};

// Do not remove this line or your tests will break!
export default Adagrams;