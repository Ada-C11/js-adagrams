
const letterDistribution = {
  "A": 9,
  "B": 2,
  "C": 2,
  "D": 4,
  "E": 12,
  "F": 2,
  "G": 3,
  "H": 2,
  "I": 9,
  "J": 1,
  "K": 1,
  "L": 4,
  "M": 2,
  "N": 6,
  "O": 8,
  "P": 2,
  "Q": 1,
  "R": 6,
  "S": 4,
  "T": 6,
  "U": 4,
  "V": 2,
  "W": 2,
  "X": 1,
  "Y": 2,
  "Z": 1,
}

// const fillPool = (letterPool) => {
//   Object.keys(letterDistribution).forEach( function(letter) {
//     for (let i = 0; i < letterDistribution[letter]; i += 1) {
//       letterPool.push(letter);
//     }
//   })
// }

const Adagrams = {
  fillPool(letterPool) {
    Object.keys(letterDistribution).forEach( function(letter)  {
      for (let i = 0; i < letterDistribution[letter]; i += 1) {
        letterPool.push(letter);
      }
    })
  },

  drawLetters() {
    let pool = [];
    this.fillPool(pool);
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      let drawnIndex = Math.floor(Math.random() * pool.length);
      console.log(`Pool length is ${pool.length}`)
      hand.push(pool[drawnIndex]);
      pool.splice(drawnIndex, 1);
    }
    console.log(hand);
    return hand;
  },
};

Adagrams.drawLetters()

// Do not remove this line or your tests will break!
// export default Adagrams;
