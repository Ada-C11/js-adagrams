const Adagrams = {
  drawLetters() {
    let letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'.split('');
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      const letterIndex = letterPool.indexOf(letterPool[Math.floor(Math.random()*letterPool.length)]);
      hand.push(letterPool[letterIndex]);
      letterPool.splice(letterIndex, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    const inputArr = input.split('');
    for (const char in inputArr) {
      if (!lettersInHand.includes(inputArr[char])) {
        return false;
      }
      const ltrIndex = lettersInHand.indexOf(inputArr[char]);
      lettersInHand.splice(ltrIndex, 1);
    }
    return true;
  },

  scoreWord(word) {
    let wordCap = word.toUpperCase();
    let score = 0;
    for (const letter in wordCap) {
      if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(wordCap[letter])) {
        score += 1;
      } else if (['D', 'G'].includes(wordCap[letter])) {
        score += 2;
      } else if (['B', 'C', 'M', 'P'].includes(wordCap[letter])) {
        score += 3;
      } else if (['F', 'H', 'V', 'W', 'Y'].includes(wordCap[letter])) {
        score += 4;
      } else if (['K'].includes(wordCap[letter])) {
        score += 5;
      } else if (['J', 'X'].includes(wordCap[letter])) {
        score += 8;
      } else if (['Q', 'Z'].includes(wordCap[letter])) {
        score += 10;
      }
    }

    if (word.length >= 7 && word.length <= 10) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {

    let highWord = words[0];
    let highScore = 0;
    let ties = [];
    
    for (const curWord in words) {
      let curScore = Adagrams.scoreWord(words[curWord]);
      if (curScore > highScore) {
        highWord = words[curWord];
        highScore = curScore;
        ties = [words[curWord]];
      } else if (curScore === highScore) {
        ties.push(words[curWord]);
      }
    }

    for (const tieWord in ties) {
      if (ties[tieWord].length === 10) {
        highWord = ties[tieWord];
        break;
      } else if (ties[tieWord].length < highWord.length) {
        highWord = ties[tieWord];
      }
    }

    let highest = { word: highWord, score: highScore };
    return highest;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
