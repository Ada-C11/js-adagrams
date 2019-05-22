const alphabet = {
  'A': 9,'B': 2,'C': 2,'D': 4,'E': 12,'F': 2,'G': 3,
  'H': 2,'I': 9,'J': 1,'K': 1,'L': 4,'M': 2,'N': 6,
  'O': 8,'P': 2,'Q': 1,'R': 6,'S': 4,'T': 6,'U': 4,
  'V': 2,'W': 2,'X': 1,'Y': 2,'Z': 1 };

const letterScores = {
  'A': 1,'E': 1,'I': 1,'O': 1,'U': 1,'L': 1,'N': 1,
  'R': 1,'S': 1,'T': 1,'D': 2,'G': 2,'B': 3,'C': 3,
  'M': 3,'P': 3,'F': 4,'H': 4,'V': 4,'W': 4,'Y': 4,
  'K': 5,'J': 8,'X': 8,'Q': 10,'Z': 10 };

const Adagrams = {
  drawLetters() {
    const hand = [];
    const thisHand = Object.assign({}, alphabet);
    let tempList = Object.keys(thisHand);
    
    for (let i = hand.length; i < 10;) {
      let randomLetter = tempList[ Math.floor(Math.random()*tempList.length) ];

      if (thisHand[randomLetter] > 0) {
        hand.push(randomLetter);
        thisHand[randomLetter] -= 1;
        i += 1;
      };
  };
  return hand;
  },

  usesAvailableLetters(input, lettersInHand) {

    const splitInput = input.toUpperCase().split("")

    const frequency = {};
    for (let i=0; i < lettersInHand.length; i += 1) {
          let character = lettersInHand[i];
          if (frequency[character]) {
           frequency[character]+= 1;
        } else {
           frequency[character] = 1;
        }
    }
    const trueFalse = []
    splitInput.forEach((letter) => {
      if (frequency[letter]) {
        if (frequency[letter] > 0) {
          frequency[letter] -= 1;
          trueFalse.push(true);
        } else{
          trueFalse.push(false);
        };
      } else {
        trueFalse.push(false);
      }
    });

    if (trueFalse.includes(false)) {
      return false;
    } else {
      return true;
    }
  },

  scoreWord(word) {
    word = word.toUpperCase().split("");
    let total = 0;
    word.forEach((letter) => {
      total += letterScores[letter];
    });

    if (word.length >=7) {
      return total + 8;
    } else {
      return total;
    }
  },

  highestScoreFrom(words) {
    let bestWord = {
      word: '',
      score: 0
    };

    words.forEach((word) => {
      if (this.scoreWord(word) > bestWord.score) {
        bestWord.word = word;
        bestWord.score = this.scoreWord(word);
      } else if (this.scoreWord(word) === bestWord.score) {
        if (word.length === 10 && bestWord.word.length != 10) {
          bestWord.word = word;
        } else if (word.length < bestWord.word.length &&bestWord.word.length != 10) {
          bestWord.word = word;
        }
      }
    });

    return bestWord;
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
