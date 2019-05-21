const Adagrams = {
  allLetters: {
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
  },
  drawLetters() {
    let letterPool = [];
    
    Object.keys(this.allLetters).forEach(letter => {
      
      let times = this.allLetters[letter];
      for (let i = 0; i < times; i += 1) {
        letterPool.push(letter);
      }
    });
    const hand = letterPool.slice(0, 10);

    return hand;
  },
};

Adagrams.drawLetters();
// Do not remove this line or your tests will break!
export default Adagrams;
