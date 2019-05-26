const LETTERS = {
  A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4,
  M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1,
  Y:2, Z:1
};

const SCORES = {
  A:1, B:3, C:3, D:2, E:1, F:4, G:2, H:4, I:1, J:8, K:5, L:1,
  M:3, N:1, O:1, P:3, Q:10, R:1, S:1, T:1, U:1, V:4, W:4, X:8,
  Y:4, Z:10
};
const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterPool = generateLetters(LETTERS);
    const hand = [];
    let i = 0;
    while (i < 10) {
      let card = random(letterPool);
      let cardValue = LETTERS[card];
      if (countLettersHand(cardValue,hand) < cardValue) {
        hand.push(card);
        i += 1;
      } 
    }
    return hand
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.split('');
    const inputSize = inputArray.length;
    for (let i = 0; i < inputSize; i += 1) {
      if (!(lettersInHand.includes(input[i]))) {
        return false
    } else {
      const index = lettersInHand.indexOf(input[i]);
      lettersInHand.splice(index, 1);
    }
  }
  return true
  },

  scoreWord(word) {
    const n = word.length;
    let score = 0;
    for (let i = 0; i < n; i +=1) {
      const letter = word[i].toUpperCase();
      score += SCORES[letter]
  }
  if (word.length > 6) {
    score += 8;
  }
  return score
  },

  highestScoreFrom(words) {
    let scoresHash = {};
    words.forEach(word => {
      scoresHash[word] = this.scoreWord(word);
    })
    const scores = words.map((v) => { return scoresHash[v]; });
    const maxScore = scores.reduce((a, b) => {
      return(Math.max(a, b));
    });
    const possibleTieWords = words.filter(word => scoresHash[word] == maxScore);
    let winningWord = possibleTieWords[0];
    if (winningWord.length === 10) {
      return {score: maxScore, word: winningWord}
    } 
    const nTie = possibleTieWords.length;
    for (let i = 1; i < nTie; i += 1) {
      if (possibleTieWords[i].length === 10) {
        winningWord = possibleTieWords[i];
      } else if (possibleTieWords[i].length < winningWord.length) {
        winningWord = possibleTieWords[i];
      } else if (possibleTieWords[i].length === winningWord.length) {
      }
    }
    return {score: maxScore, word: winningWord}
  },
};

const random = letterPool => {
  const index = Math.floor(Math.random() * letterPool.length);
  return letterPool[index]
};

const generateLetters = letters => {
  const letter_array = [];
  const keys = Object.keys(letters);
  const n = keys.length;

  for (let i =0; i < n; i+=1) {
    const key = keys[i];
    let numEach = letters[key];
    for (let j=0; j < numEach; j+=1) {
      letter_array.push(key);
    }
  }
  return letter_array
};

const countLettersHand = (cardVal, hand) => {
  const count = hand.filter(i => i === cardVal).length;
  return count
};

// Do not remove this line or your tests will break!
export default Adagrams;

