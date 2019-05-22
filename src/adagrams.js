const letterPool = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
  N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
}

const Adagrams = {
  // return the number of times a single (case insensitive) char occurs inside the container it's in
  // letterCount(char, container) {
  //   return (container.match(/char/gi) || []).length
  // },


  drawLetters() {
    const keys = Object.keys(letterPool);
    const length = keys.length;
    let lettersInHand = [];

    for (let i = 0;i < 10;i += 1) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomKey = keys[randomIndex];
      lettersInHand.push(randomKey);
    }
    return lettersInHand;
  },



  usesAvailableLetters(input, lettersInHand) {
    const count = function count(char, container) {
      return (container.match(/char/gi) || []).length;
    };

    let result = true;
    let stringifiedHand = lettersInHand.join('')
    for (let letter of input) {
      if (!lettersInHand.includes(letter)) {
        result = false;
      }
      if (count(letter, input) > count(letter, stringifiedHand)) {
        result = false;
      }
    }
    return result;
  },
}

// Do not remove this line or your tests will break!
export default Adagrams;



