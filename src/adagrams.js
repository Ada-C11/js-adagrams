const Adagrams = {
  drawLetters() {
    const available_letters = {
      'A': 9,
      'B': 2,
      'C': 2,
      'D': 4,
      'E': 12,
      'F': 2,
      'G': 3,
      'H': 2,
      'I': 9,
      'J': 1,
      'K': 1,
      'L': 4,
      'M': 2,
      'N': 6,
      'O': 8,
      'P': 2,
      'Q': 1,
      'R': 6,
      'S': 4,
      'T': 6,
      'U': 4,
      'V': 2,
      'W': 2,
      'X': 1,
      'Y': 2,
      'Z': 1,
    };

    let letterHash = [];
    for (let key in available_letters) {
      while (available_letters[key] > 0) {
        letterHash.push(key);
        available_letters[key] -= 1;
      };
    };
    
    let drawnLetters = [];
    for (let i = 0; i < 10; i += 1) {
      let randIndex = Math.floor(Math.random()*letterHash.length);
      drawnLetters.push(letterHash[randIndex]);
      letterHash.splice(randIndex, 1);
    };

    return drawnLetters;
  },

  usesAvailableLetters(input, letterInHand) {
    for (let i = 0; i < input.length; i += 1) {
      if (letterInHand.includes(input.charAt(i))) {
        letterInHand.splice(input.charAt(i), 1);
      } else {
        return false;
      };
    };
    return true;
  },

  scoreWord (word) {
    let total = 0;
    word = word.toUpperCase();
    
    for (let i = 0; i < word.length; i +=1) {
      switch (word.charAt(i)) {
        case 'A':
        case 'E': 
        case 'I':
        case 'O': 
        case 'U': 
        case 'L': 
        case 'N': 
        case 'R': 
        case 'S':
        case 'T':
          total += 1;
          break;
        case 'D':
        case 'G':
          total += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          total += 3;
          break;
        case 'F':
        case 'H':
        case 'V': 
        case 'W':
        case 'Y':
          total += 4
          break;
        case 'K':
          total += 5;
          break;
        case 'J':
        case 'X':
          total += 8;
          break;
        case 'Q':
        case 'Z':
          total += 10;
          break;
      };
    };

    if (word.length >= 7) {
      total += 8;
    };

    return total;
  },

  highestScoreFrom (words) {
    let winningWord = {
      'word': "",
      'score': 0,
    };

    for (let word of words) {
      if (word.length == 10 && winningWord['word'].length != 10) {
        winningWord['word'] = word;
        winningWord['score'] = this.scoreWord(word);
      } else if (this.scoreWord(word) >= winningWord['score'] && word.length == 10 && winningWord['word'].length != 10) {
        winningWord['word'] = word;
        winningWord['score'] = this.scoreWord(word);
      } else if (this.scoreWord(word) >= winningWord['score'] && word.length < winningWord['word'].length && winningWord['word'].length != 10) {
        winningWord['word'] = word;
        winningWord['score'] = this.scoreWord(word);
      } else if (this.scoreWord(word) > winningWord['score']) {
        winningWord['word'] = word;
        winningWord['score'] = this.scoreWord(word);
      };
    };
    return winningWord
    // console.log(winningWord)
  },
};

// console.log(Adagrams.highestScoreFrom(['z', 'zzzzzzz']))

// Do not remove this line or your tests will break!
export default Adagrams;