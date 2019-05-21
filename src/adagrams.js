const letterPool = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
}


const Adagrams = {
  drawLetters() {
    const keys = Object.keys(letterPool);
    const length = keys.length;
    let handOfLetters = [];

    for (let i = 0;i < 10;i += 1) {
      handOfLetters.push(letterPool[keys[Math.floor(Math.random() * length)]]);
    }
    console.log(handOfLetters);
    return handOfLetters;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
