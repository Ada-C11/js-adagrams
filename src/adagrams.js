const Adagrams = {
  letters : "abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),
  letterQuantity : [9, 2, 2, 3, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1],
  letterValues: {"A": 1, "E": 1, "I" : 1, "O" : 1, "U": 1, "L": 1, "N": 1, "R" : 1, "S" : 1, "T" : 1, "D" : 2, "G" : 2, "B" : 3, "C" : 3, "M" : 3, "P" : 3, "F" : 4, "H" : 4, "V" : 4, "W" : 4, "Y" : 4, "K" : 5, "J" : 8, "X" : 8, "Q" : 10, "Z" : 10},
  drawLetters() {
    let hand = []
    for (let i = 0; i < this.letters.length; i+=1) {
      for (let j = 0; j < this.letterQuantity[i]; j+=1) {
        hand.push(this.letters[i])
      }
    }
    for (let i = hand.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
        [hand[i], hand[j]] = [hand[j], hand[i]];
    }

    return hand.slice(1,11)              
},

  usesAvailableLetters(input, lettersInHand) {
    let result = true
    for (let i =0; i < input.length; i += 1) {
      if (lettersInHand.includes(input[i]) === true) {
         let index = lettersInHand.indexOf(input[i]);
         lettersInHand.splice(index, 1);
      }
      else {
        result = false
      }
    }
    return result
  },

  scoreWord(word) {
    let points = 0;
    let wordArray = word.toUpperCase().split("");

    wordArray.forEach( (letter) => {
      points += this.letterValues[letter]
    });

    if (word.length > 6) {
      points = points + 8;
    }

    return points
  },
  
  highestScoreFrom(words) {
    let winningWords = []
    let winningScore = 0

    words.forEach((word) => {
      let score = this.scoreWord(word)
      if (score > winningScore) {
        winningScore = score
      }
    });

    words.forEach((word) => {
      let score = this.scoreWord(word)
      if (score === winningScore) {
        winningWords.push(word)
      }
    });

    let winningWord = winningWords[0]

    if (winningWords.length > 1) {

      if (winningWords.some((word) => word.length === 10) === true) {
        winningWord = winningWords.find((word) => word.length === 10)
      }
      else {
        let shortest = winningWord.length
        winningWords.forEach((word) => {
          if(word.length < shortest) {
            shortest = word.length
          }
        })
        winningWord = winningWords.find((word) => word.length === shortest)

      }
    }
    
    let winningWordsHash = {"word" : winningWord, "score": winningScore}
    return winningWordsHash
  }
};


// console.log(Adagrams.usesAvailableLetters("b".split(""), "brownfaaoxx".split("")));
// console.log(Adagrams.drawLetters());
// console.log(Adagrams.scoreWord("xxxxxxx"));
// console.log(Adagrams.highestScoreFrom(['AAAAAAAAAA', 'BBBBBB']));


// Do not remove this line or your tests will break!
export default Adagrams;
