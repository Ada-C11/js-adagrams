const Adagrams = {
  // prettier-ignore
  letters: ["A", "A", "A", "A", "A", "A", "A", "A", "A", 
            "B", "B", "C", "C", "D", "D", "D", "D", "E", 
            "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "E", "E", "F", "F", "G", "G", "G", "H", "H",
            "I", "I", "I", "I", "I", "I", "I", "I", "I", 
            "J", "K", "L", "L", "L", "L", "M", "M", "N", 
            "N", "N", "N", "N", "N", "O", "O", "O", "O", 
            "O", "O", "O", "O", "P", "P", "Q", "R", "R", 
            "R", "R", "R", "R", "S", "S", "S", "S", "T", 
            "T", "T", "T", "T", "T", "U", "U", "U", "U", 
            "V", "V", "W", "W", "X", "Y", "Y", "Z"],
  // prettier-ignore
  letterPoints: { a: 1, e: 1, i: 1, o: 1, u: 1, n: 1, r: 1, 
                  s: 1, t: 1, d: 2, g: 2, l: 1, b: 3, c: 3, 
                  m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, 
                  k: 5, j: 8, x: 8, q: 10, z: 10 },

  drawLetters() {
    let drawnLetters = [];
    for (let i = 0; i < 10; i += 1) {
      const letterCount = this.letters.length;
      const randomIndex = Math.floor(Math.random() * Math.floor(letterCount));
      const selectIndex = letterCount - 1 - i;
      const temp = this.letters[selectIndex];
      this.letters[selectIndex] = this.letters[randomIndex];
      this.letters[randomIndex] = temp;
      drawnLetters.push(this.letters[selectIndex]);
    }
    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.split('').sort();
    lettersInHand = lettersInHand.sort();
    for (let i = 0, j = 0; i < input.length; ) {
      if (!lettersInHand[j]) return false;
      if (input[i] === lettersInHand[j]) {
        i += 1;
        j += 1;
      } else if (input[i] > lettersInHand[j]) {
        j += 1;
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    if (word.length == 0) return 0;
    //prettier-ignore
    const score = word.split('').map(char => this.letterPoints[char.toLowerCase()]);
    if (score.length >= 7) {
      score[0] += 8;
    }
    return score.reduce((a, b) => a + b);
  },
};
// console.log(Adagrams.scoreWord('DOG'));

// Do not remove this line or your tests will break!
export default Adagrams;
