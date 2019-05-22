// const gen_letter_array = function gen_letter_array(letter_object) {
//   const array = [];
//   letter_object.forEach()
// }

// letter_freq = {
//   A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4,
//   G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1,
// }
// const avail_letters = gen_letter_array(letter_freq);

// Helper method to shuffle letterFrequency


const Adagrams = {
  shuffle(letters) {
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.slice(0,10);
  },
  drawLetters() {
      const letterFrequency = [
        "A", "A", "A", "A", "A", "A", "A", "A", "A",
        "B", "B",
        "C", "C",
        "D", "D", "D", "D",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
        "F", "F",
        "G", "G", "G",
        "H", "H",
        "I", "I", "I", "I", "I", "I", "I", "I", "I",
        "J",
        "K",
        "L", "L", "L", "L",
        "M", "M",
        "N", "N", "N", "N", "N", "N",
        "O", "O", "O", "O", "O", "O", "O", "O",
        "P", "P",
        "Q",
        "R", "R", "R", "R", "R", "R",
        "S", "S", "S", "S",
        "T", "T", "T", "T", "T", "T",
        "U", "U", "U", "U",
        "V", "V",
        "W", "W", "X",
        "Y", "Y",
        "Z",
      ];
    const lettersInHand = this.shuffle(letterFrequency);
    return lettersInHand;
  },
  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) {
      return false;
    }
    const lettersHash = {}
    lettersInHand.forEach( function(letter) {
      if (lettersHash[letter]) {
        lettersHash[letter] += 1;
      } else {
        lettersHash[letter] = 1;
      }
    })
    console.log(lettersHash);
    input.toUpperCase();
    const inputArray = input.split('');
    console.log(inputArray);
    inputArray.forEach ( function(item) {
      if (lettersHash[item]) {
        lettersHash[item] -= 1;
        if (lettersHash[item] < 0) {
          return false;
        }
      } else {
        return false;
      }
      return true;
    })
  },  
};

export default Adagrams;