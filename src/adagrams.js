const Adagrams = {
  drawLetters() {
    const letterPool = [];

    for (let i = 0; i < 9; i += 1) {
      letterPool.push('A');
      letterPool.push('I');
    }

    for (let i = 0; i < 2; i += 1) {
      letterPool.push('B');
      letterPool.push('C');
      letterPool.push('F');
      letterPool.push('H');
      letterPool.push('M');
      letterPool.push('P');
      letterPool.push('V');
      letterPool.push('W');
      letterPool.push('Y');
    }

    for (let i = 0; i < 4; i += 1) {
      letterPool.push('D');
      letterPool.push('L');
      letterPool.push('S');
      letterPool.push('U');
    }

    for (let i = 0; i < 12; i += 1) {
      letterPool.push('E');
    }

    for (let i = 0; i < 3; i += 1) {
      letterPool.push('G');
    }
  
    letterPool.push('J');
    letterPool.push('K');
    letterPool.push('Q');
    letterPool.push('X');
    letterPool.push('Z');

    for (let i = 0; i < 6; i += 1) {
      letterPool.push('N');
      letterPool.push('R');
      letterPool.push('T');
    }

    for (let i = 0; i < 8; i += 1) {
      letterPool.push('O');
    }

    let playerHand = [];

    for (let i = 0; i < 10; i += 1) {
      let randLetter = letterPool[Math.floor(Math.random() * letterPool.length)];
      playerHand.push(randLetter);
    }

    return playerHand;
    // Implement this method for wave 1
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.toUpperCase();
    let letters = lettersInHand

    for (let i = 0; i < input.length; i += 1) {
      if (letters.includes(input[i])) {
        letters.splice(input[i], 1);
      } else {
        return false;
      }
    }

    return true;  
  }
  
};

// Do not remove this line or your tests will break!
export default Adagrams;
