const Adagrams = {
  drawLetters() { //ln 3
    const poolOfLetters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"
    ];
    let myLetters = []; //ln 7
    for (let i = 0; i < 10; i +=1) {
      let randomIndexNum = Math.floor(Math.random() * poolOfLetters.length); //shuffle isnt real //using length for index
      myLetters.push(poolOfLetters[randomIndexNum]);    
    }
        return myLetters; //ln 13
  },

  usesAvailableLetters(input, lettersInHand) { //ln 16
    for (let i = 0; i < input.length; i +=1) {
      const char = input.charAt(i);
      if (!lettersInHand.includes(char)) {
        return false;
      }
      const index = lettersInHand.indexOf(char);
      lettersInHand.splice(index, 1);
    }
    return true;
  },

  scoreWord(word) { //ln 32
    const letterScore = { 
      "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2,"H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1,"O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10,
    }
    let wordToScore = word.toUpperCase().split(''); //ln 36

    let points = 0; 
    if(wordToScore.length >= 7) {
      points += 8;
    }
    wordToScore.forEach( function(char) {
      points += letterScore[char];
    }
  )
  return points;
  },
  highestScoreFrom(words) { //ln 52
    let winningHash = {
      word: "",
      score: 0,
    };
    words.forEach((word) => {
      if (this.scoreWord(word) > winningHash.score) {
        winningHash.word = word;
        winningHash.score = this.scoreWord(word)
      } else if (this.scoreWord(word) === winningHash.score) {
        if (word.length === 10 && winningHash.word.length != 10) {
          winningHash.word = word
        } else if (word.length < winningHash.word.length &&
          winningHash.word.length != 10) {
          winningHash.word = word;
        }
      }
    });
    return winningHash; // doesnt work?!!?!
  }
}
// console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
export default Adagrams;