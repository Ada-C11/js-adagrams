const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letterDistribution = {
      A: 9, B: 2, C: 2, D: 4, E: 12,
      F: 2, G: 3, H: 2, I: 9, J: 1,
      K: 1, L: 4, M: 2, N: 6, O: 8,
      P: 2, Q: 1, R: 6, S: 4, T: 6,
      U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1,
    }

    const letters = new Array();

    for (let char in letterDistribution) {
      for(let i = 0; i < letterDistribution[char]; i += 1) {
        letters.push(char);
      }
    }

    let hands = new Array();
  
    for(let i = 0; i < 10; i += 1) {
      const randIndex = Math.floor(Math.random() * (letters.length));
      hands.push(letters[randIndex]);
      letters.splice(randIndex, 1);
    }

    return hands;
  },

  usesAvailableLetters(input, lettersInHand) {
    for (let i = 0; i < input.length; i += 1) {
      let char = input.charAt(i);
      if (!lettersInHand.includes(char)) {
        return false;
      }
      let index = lettersInHand.indexOf(char);
      lettersInHand.splice(index, 1);
    }

    return true;
  },

  scoreWord(word) {
    word = word.toUpperCase();
    
    let finalScore = 0;

    finalScore = (word.length >= 7) ? 8 : 0

    const scores = [
      [1, ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']],
      [2, ['D', 'G']],
      [3, ['B', 'C', 'M', 'P']],
      [4, ['F', 'H', 'V', 'W', 'Y']],
      [5, ['K']],
      [8, ['J', 'X']],
      [10, ['Q', 'Z']],
    ]

    for (let i = 0; i < word.length; i += 1) {
      let char = word.charAt(i);
      for (let j = 0; j < scores.length; j += 1) {
        if (scores[j][1].includes(char)) {
          finalScore += scores[j][0];
        }
      }
    }

    return finalScore;
  },

  highestScoreFrom(words) {
    const result = {
      word: "",
      score: 0,
    };

    for (let i = 0; i < words.length; i += 1) {
      let word = words[i];
      let score = this.scoreWord(word);

      if(score < result.score) {
        continue;
      }

      if (result.score < score) {
        result.word = word;
        result.score = score;
      }

      if (word.length === result.word.length || result.word.length === 10) {
        continue;
      }

      if (word.length === 10 || words[i].length < result.word.length) {
        result.word = word;
        continue;
      }
    }

    return result;
  },
}
// Do not remove this line or your tests will break!
export default Adagrams;
