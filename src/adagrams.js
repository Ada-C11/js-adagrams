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

    input.toUpperCase();
    let boolean = true;
    const inputArray = input.split('');
    inputArray.forEach ( function(letter) {
      if (lettersHash[letter]) {
        lettersHash[letter] -= 1;
        if (lettersHash[letter] < 0) {
          boolean = false;
        }
      } else {
        boolean = false;
      }
    })
    return boolean;
  },  

  scoreWord(word){
    const letterScore = {
      A: 1, N: 1, B: 3, O: 1, C: 3, P: 3, D: 2, Q: 10, E: 1, R: 1, F: 4, S: 1,
      G: 2, T: 1, H: 4, U: 1, I: 1, V: 4, J: 8, W: 4, K: 5, X: 8, L: 1, Y: 4, M: 3, Z: 10,
    }
    let total = 0;
    word = word.toUpperCase();
    const wordArray = word.split('');
    if (wordArray.length > 6) {
      total += 8;
    }
    wordArray.forEach(letter => total += letterScore[letter]);
    return total;
  },
  highestScoreFrom(words) {
    let winner = { word: '', score: 0 };
    words.forEach( (word) => {
      if (this.scoreWord(word) > winner.score) {
        winner = { word: word, score: this.scoreWord(word) }
      } else if (this.scoreWord(word) === winner.score) {
        if (((word.length < winner.word.length) || (word.length === 10)) && (winner.word.length != 10)) {
          winner = { word: word, score: this.scoreWord(word)};
        }
      }
    }) 
    return winner;
  },
};

export default Adagrams;