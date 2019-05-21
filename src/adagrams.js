import { Hash } from "crypto";

const Adagrams = {
  letterValues: {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9,
    'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
    'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
  },

  makeBag() {
    let letterBag = [];

    for (let key in this.letterValues) {
      let value = this.letterValues[key];

      for (let i = 0; i < value; i++) {
        letterBag.push(key);
      }
    }

    return letterBag;
  },

  drawLetters() {
    const letterBag = this.makeBag();
    
    let hand = [];

    for (let i = 0; i < 10; i++) {
      hand.push(letterBag[Math.floor(Math.random() * letterBag.length)]);
    }

    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    const word = input.toUpperCase().split('');
    let handArray = lettersInHand;
    let deleted = 0;

    for (let i = 0; i < word.length; i++) {
      if (handArray.includes(word[i])) {
        for (let j = 0; j < handArray.length; j++) {
          if (handArray[j] === word[i]) {
            handArray.splice(j, 1);
            break
          }
        }
      } else {
        return false;
      }
    }

    return true;
  },

  scoreWord(word) {
    let score = 0;
    const pointValues = {
      1: 'AEIOULNRST',
      2: 'DG',
      3: 'BCMP',
      4: 'FHVWY',
      5: 'K',
      8: 'JX',
      10: 'QZ'
    }

    word.toUpperCase().split('').forEach(function (letter) {
      for (let letterPoints in pointValues) {
        let lettersString = pointValues[letterPoints];
        
        if (lettersString.split('').includes(letter)) {
          score += Number(letterPoints);
        }
      }
    });

    if (word.length > 6 && word.length < 11) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {
    let winningHash = {
      'word': null, 
      'score': 0
    };

    for (let i = 0; i < words.length; i++) {
      const thisWord = words[i];
      const thisScore = this.scoreWord(thisWord);
      if (thisScore > winningHash['score']) {
        winningHash['word'] = thisWord;
        winningHash['score'] = thisScore;
      } else if ((thisScore === winningHash['score']) && (winningHash['word'].length < 10)) {
        if (thisWord.length === 10) {
          winningHash['word'] = thisWord;
          winningHash['score'] = thisScore;
        } else if (thisWord.length < winningHash['word'].length) {
          winningHash['word'] = thisWord;
          winningHash['score'] = thisScore;
        }
      }
    }

    return winningHash;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;