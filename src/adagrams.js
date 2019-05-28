const Adagrams = {
  drawLetters() {
    const letterFrequency = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 };

    let letterPool = []
    Object.keys(letterFrequency).forEach( (letter) => {
      for (let i = 0; i < letterFrequency[letter]; i += 1) {
        letterPool.push(letter);
      }
    });

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffle(letterPool);
    let drawnLetters = letterPool.slice(0, 10);

    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    const hand = lettersInHand.map(letter => letter.toUpperCase());

    for (const letter of inputArray) {
      if (hand.includes(letter)) {
        hand.splice( hand.indexOf(letter), 1);
        console.log(`input: ${inputArray}, hand: ${hand}`);
      } else {
        return false;
      }
    };
    return true;
  },

  scoreWord(word) { 
    const scoreChart = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    };

    let points = 0;
    const wordArray = word.toUpperCase().split('');

    wordArray.forEach((letter) => {
      points += scoreChart[letter];
    });
    
    if (word.length > 6 && word.length < 11) {
      points += 8;
    }

    return points;
  },

  highestScoreFrom(words) {
    let winningScore = 0;
    let winningWord = '';
    
    for (const word of words) {
      const eachScore = this.scoreWord(word);
      if (eachScore > winningScore) {
        winningScore = eachScore;
        winningWord = word;
      } else if (eachScore == winningScore) {
        // console.log(winningWord);
        if (winningWord.length != 10) {
          let winningLength = winningWord.length;
          winningScore = eachScore;
          winningWord = word;
          console.log(winningWord);
          console.log(winningLength);
        }
      }
    }
    
    return {
      word: winningWord,
      score: winningScore
    }
  }
};

// const letters = ['d', 'o', 'g', 'f', 'q', 'e', 'v', 'i', 'a', 'd'];
// console.log(Adagrams.highestScoreFrom(['fqe', 'dog', 'ba']));

// Do not remove this line or your tests will break!
export default Adagrams;
