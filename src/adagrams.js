const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterFrequency = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };

    let letterPool = []
    Object.keys(letterFrequency).forEach( (letter) => {
      for (let i = 0; i < letterFrequency[letter]; i += 1) {
        letterPool.push(letter);
      }
    });

    let drawnLetters = []
    for (let i = 0; i < 10; i += 1) {
      drawnLetters[i] = letterPool[Math.floor(Math.random()*letterPool.length)];
    }

    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    let size = 0;
    let inputArray = input.toUpperCase().split('');

  
  }
};

console.log(Adagrams.drawLetters());
// console.log(Adagrams.usesAvailableLetters('dog', lettersInHand));

// Do not remove this line or your tests will break!
// export default Adagrams;
