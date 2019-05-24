const Adagrams = {
  drawLetters() {
    const letterFrequency = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };

    let letterPool = []
    Object.keys(letterFrequency).forEach( (letter) => {
      for (let i = 0; i < letterFrequency[letter]; i += 1) {
        letterPool.push(letter);
      }
    });

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffle(letterPool);
    let drawnLetters = letterPool.slice(0, 10);

    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    const hand = lettersInHand.map(letter => letter.toUpperCase());

    for (const letter of inputArray) {
      if (hand.includes(letter)) {
        hand.splice( hand.indexOf(letter), 1);
        console.log(`input: ${inputArray}, hand: ${hand}`);
      } else {
        // console.log("this failed")
        return false;
      }
    };
    // console.log("wahoozles!")
    return true;
  },

  scoreWord(word) { 
    // hash object with point value
    // initialize score = 0
    // iterate through word
    // increment score with each value
    // check length

    // return int (score)
  },


};

// const letters = ['d', 'o', 'x', 'f', 'q', 'e', 'v', 'i', 'a', 'd'];
// console.log(Adagrams.usesAvailableLetters('dog', letters));

// Do not remove this line or your tests will break!
export default Adagrams;
