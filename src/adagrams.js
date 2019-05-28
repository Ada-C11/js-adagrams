class Adagrams {

  // Draws letters into hand
  static drawLetters() {
    const availableLetters = {
      A: 9, B: 2, C: 2, D: 4, E: 12, F: 2,
      G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2,
      N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6,
      U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1
    }

    const letterSet = [];
    Object.keys(availableLetters).forEach(function(letter){
      for (let i = 0; i < availableLetters[letter]; i += 1) {
        letterSet.push(letter);
      }
    }); 

    const hand = [];
    for (let i = 0; i < 10; i += 1) {
      hand.push(letterSet[Math.floor(Math.random() * letterSet.length)]);
    }
    return hand;
  }

  // Checked word played against player's hand
  static usesAvailableLetters(word, hand) {
    const wordArray = word.split('');
    let available = true
    wordArray.forEach(function(letter) {
      if (hand.includes(letter)) {
        hand.splice(hand.indexOf(letter), 1);
      } else {
        available = false
      }
    });
    return available;
  }

  // Score word played
  static scoreWord(word){
    const letterValues = {
      "AEIOULNRST": 1,
      "DG": 2,
      "BCMP": 3,
      "FHVWY": 4,
      "K": 5,
      "JX": 8,
      "QZ": 10
    }

    let total = 0;
    let letterScore = 0;

    const capitalWord = word.toUpperCase().split('');
    capitalWord.forEach(function(letter) {
      Object.keys(letterValues).forEach(function(key) {
        if (key.includes(letter)) {
          letterScore = letterValues[key];
          total += letterScore;
        }
      })
    })

    if (word.length > 6 && word.length < 11) {
      total += 8;
    }
    return total;
  }

  // highest scoring word and its score
  static highestScoreFrom(words) {
    let bestWord = '';
    let bestScore = 0;
    let highestScore = {};

    words.forEach(word => {
      let score = this.scoreWord(word);

      if (score > bestScore) {
        bestScore = score;
        bestWord = word;
      } else if (score == bestScore && word.length < bestWord.length && bestWord.length != 10) {
        bestWord = word;
      } else if (score == bestScore && word.length == 10 && bestWord.length != 10) {
        bestWord = word;
      }
    })

    highestScore['word'] = bestWord;
    highestScore['score'] = bestScore;
    return highestScore;
  }
}

export default Adagrams;

