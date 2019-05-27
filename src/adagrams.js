const Adagrams = {
  // prettier-ignore
  letters: ["A", "A", "A", "A", "A", "A", "A", "A", "A", 
            "B", "B", "C", "C", "D", "D", "D", "D", "E", 
            "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "E", "E", "F", "F", "G", "G", "G", "H", "H",
            "I", "I", "I", "I", "I", "I", "I", "I", "I", 
            "J", "K", "L", "L", "L", "L", "M", "M", "N", 
            "N", "N", "N", "N", "N", "O", "O", "O", "O", 
            "O", "O", "O", "O", "P", "P", "Q", "R", "R", 
            "R", "R", "R", "R", "S", "S", "S", "S", "T", 
            "T", "T", "T", "T", "T", "U", "U", "U", "U", 
            "V", "V", "W", "W", "X", "Y", "Y", "Z"],
  // prettier-ignore
  letterPoints: { a: 1, e: 1, i: 1, o: 1, u: 1, n: 1, r: 1, 
                  s: 1, t: 1, d: 2, g: 2, l: 1, b: 3, c: 3, 
                  m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, 
                  k: 5, j: 8, x: 8, q: 10, z: 10},

  drawLetters() {
    let drawnLetters = [];
    for (let i = 0; i < 10; i += 1) {
      const letterCount = this.letters.length - i;
      const randomIndex = Math.floor(Math.random() * Math.floor(letterCount));
      const selectIndex = letterCount - 1 - i;
      const temp = this.letters[selectIndex];
      this.letters[selectIndex] = this.letters[randomIndex];
      this.letters[randomIndex] = temp;
      drawnLetters.push(this.letters[selectIndex]);
    }
    return drawnLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    input = input.split('').sort();
    lettersInHand = lettersInHand.sort();
    for (let i = 0, j = 0; i < input.length; ) {
      if (!lettersInHand[j]) return false;
      if (input[i] === lettersInHand[j]) {
        i += 1;
        j += 1;
      } else if (input[i] > lettersInHand[j]) {
        j += 1;
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {
    if (word.length === 0 || !word) return 0;
    //prettier-ignore
    const score = word.split('').map(char => this.letterPoints[char.toLowerCase()]);
    if (score.length >= 7) {
      score[0] += 8;
    }
    return score.reduce((a, b) => a + b);
  },

  // This method is less effiecient (time complexity of O(nlog(n)) where n is the number of words),
  // since I am leveraging sorting compared the other approach of iteration and comparison
  // (time complexity of O(n)), but I wanted to practice different logic and syntax in javascript. ¯\_(ツ)_/¯
  highestScoreFrom(words) {
    const wordScorePairs = this.helper.mapScores(words);
    const wordTies = this.helper.getTies(
      this.helper.sortWordsByScore(wordScorePairs)
    );
    // No tie, return highest scoring word
    if (wordTies.length === 1) return wordTies[0];
    // determine eligible winning word
    const eligibileWinningWord = this.helper.getEligibileWinningWord(
      this.helper.sortWordsByLength(wordTies)
    );
    // ensures first occurence of an eligibile winning word from orginal list of words is returned.
    return this.helper.findFirstWinningWord(
      eligibileWinningWord.word.length,
      eligibileWinningWord.score,
      wordScorePairs
    );
  },

  helper: {
    mapScores(words) {
      return words.map(word1 => {
        let wordPair = {};
        wordPair.word = word1;
        wordPair.score = Adagrams.scoreWord(word1);
        return wordPair;
      });
    },

    sortWordsByScore(wordScorePairs) {
      return wordScorePairs.sort((word1, word2) => word2.score - word1.score);
    },

    getTies(scores, index = 0, keeper = null) {
      keeper = keeper || [scores[index]];
      const scoreChecker = scores[index + 1] ? scores[index + 1].score : null;
      if (!keeper || scores[index].score !== scoreChecker) {
        return keeper;
      } else {
        keeper.push(scores[index + 1]);
        return this.getTies(scores, index + 1, keeper);
      }
    },

    sortWordsByLength(wordScorePairs) {
      return wordScorePairs.sort(
        (word1, word2) => word2.word.length - word1.word.length
      );
    },

    getEligibileWinningWord(sortedWordPairTies) {
      let wordScorePair;
      if (sortedWordPairTies[0].word.length === 10) {
        wordScorePair = sortedWordPairTies[0];
      } else {
        wordScorePair = sortedWordPairTies[sortedWordPairTies.length - 1];
      }
      return wordScorePair;
    },

    findFirstWinningWord(wordLength, score, wordScorePairs) {
      const winningWord = wordScorePairs.find(
        wordScorePair =>
          wordScorePair.word.length === wordLength &&
          wordScorePair.score === score
      );
      return winningWord;
    },
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
