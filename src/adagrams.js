class Adagrams {
  static drawLetters() {
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
  
    const hand = [];

    for (let i = 0; i < 10; i++) {
      let letter = availableHand[Math.floor(Math.random() * availableHand.length)].toUpperCase()
      hand.push(letter)
      availableHand.splice(availableHand.indexOf(letter, 1));
    }

    for (let letter of hand) {
      availableHand.push(letter);
    }

    return hand;
  }

  static usesAvailableLetters (input, lettersInHand) {
    for (let character of input) {
      let index = lettersInHand.indexOf(character);
      if (index === -1) {
        return false;
      } else {
        lettersInHand.splice(index, 1);
      }
    }
    return true;
  }

  static scoreWord (word) {
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

    let score = 0;

    for (let character of word) {
      score += scoreChart[character.toLowerCase()];
    }

    if (word.length >= 7) {
      score += 8;
    }

    return score;
  }

  static highestScoreFrom (words) {
    let bestWord = ""
    let bestScore = 0

    for (let word of words) {
      if (bestScore < this.scoreWord(word)) {
        bestScore = this.scoreWord(word);
        bestWord = word;
      } 
      if (bestScore === this.scoreWord(word)) {
        if (bestWord.length === 10) {
          bestWord = bestWord;
        } else if (word.length === 10) {
          bestWord = word;
        } else if (word.length < bestWord.length) {
          bestWord = word;
        }
      }
    }

    const best = {word: bestWord, score: bestScore}
    return best;
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;