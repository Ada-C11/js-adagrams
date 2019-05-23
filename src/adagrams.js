const letterPool = {
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
  "Z": 1
};

const letterScores = {
  "A": 1,
  "B": 3,
  "C": 3,
  "D": 2,
  "E": 1,
  "F": 4,
  "G": 2,
  "H": 4,
  "I": 1,
  "J": 8,
  "K": 5,
  "L": 1,
  "M": 3,
  "N": 1,
  "O": 1,
  "P": 3,
  "Q": 10,
  "R": 1,
  "S": 1,
  "T": 1,
  "U": 1,
  "V": 4,
  "W": 4,
  "X": 8,
  "Y": 4,
  "Z": 10
};
const Adagrams = {
  countItems(collection, letter) {
    let count = 0;
    for(let i = 0; i < collection.length; i += 1) {
      if (collection[i] === letter) {
        count += 1;
      }
    }
    
    return count;
  },

  drawLetters() {
    let letterDraw = [];
    Object.keys(letterPool).forEach((letter) => {
      let i = letterPool[letter];
  
      while (i > 0) {
        letterDraw.push(letter)
        i -= 1
      }
    })

    let hand = [];
    for (let i = 10; i > 0; i -=1) {
      let randomLetter = letterDraw[Math.floor(Math.random()*letterDraw.length)];

      while (this.countItems(hand, randomLetter) == letterPool[randomLetter]) {
        randomLetter = letterDraw[Math.floor(Math.random()*letterDraw.length)];
      }

      hand.push(randomLetter);
    }

    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {


    let result;
    for(let i = 0; i < input.length; i += 1) {
      result = lettersInHand.includes(input[i]) && this.countItems(lettersInHand, input[i]) >= this.countItems(input, input[i]);
      
      if (!result) {
        return result;
      }
    }
    return result;
  },

  scoreWord(word) {
    word = word.toUpperCase();

    let score = 0;
    for(let i = 0; i < word.length; i += 1) {
      score += letterScores[word[i]];
    }

    if (word.length > 6) {
      score += 8;
    }

    return score;
  },

   highestScoreFrom(words) {
  
    let winningWord = {
      "word": words[0],
      "score": this.scoreWord(words[0])
    };

    for(let i = 1; i < words.length; i += 1) {
      let score = this.scoreWord(words[i]);
      if (score > winningWord.score) {
        winningWord.word = words[i];
        winningWord.score = score;
      } else if (score == winningWord.score && words[i].length == 10  && winningWord.word.length != 10 ) {
        winningWord.word = words[i];
        winningWord.score = score;
      } else if (score == winningWord.score && words[i].length < 10 && winningWord.word.length < 10 && words[i].length < winningWord.word.length) {
        winningWord.word = words[i];
        winningWord.score = score;
      } 
    }

    return winningWord;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;