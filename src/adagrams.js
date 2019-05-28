// Distribution of Letters
const letterPool = ['A','A','A','A','A','A','A','A','A','B','B','C','C','D','D','D','D',
                    'E','E','E','E','E','E','E','E','E','E','E','E',
                    'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I',
                    'J','K','L','L','L','L','M','M','N','N','N','N','N','N',
                    'O','O','O','O','O','O','O','O','P','P','Q','R','S','S','S','S',
                    'T','T','T','T','T','T','U','U','U','U','V','V','W','W',
                    'X','Y','Y','Z']

const scoredWords = {};
scoredWords['A'] = 1;
scoredWords['B'] = 3;
scoredWords['C'] = 3;
scoredWords['D'] = 2;
scoredWords['E'] = 1;
scoredWords['F'] = 4;
scoredWords['G'] = 2;
scoredWords['H'] = 4;
scoredWords['I'] = 1;
scoredWords['J'] = 8;
scoredWords['K'] = 5;
scoredWords['L'] = 1;
scoredWords['M'] = 3;
scoredWords['N'] = 1;
scoredWords['O'] = 1;
scoredWords['P'] = 3;
scoredWords['Q'] = 10;
scoredWords['R'] = 1;
scoredWords['S'] = 1;
scoredWords['T'] = 1;
scoredWords['U'] = 1;
scoredWords['V'] = 4;
scoredWords['W'] = 4;
scoredWords['X'] = 8;
scoredWords['Y'] = 4;
scoredWords['Z'] = 10;

const Adagrams = {
  drawLetters() {
    const shuffled = letterPool.sort(()=> 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    return selected;
  },
  usesAvailableLetters(input, lettersInHand) {
    input = Array.from(input);
    for(let i = 0; i < input.length; i += 1) {
      if (!lettersInHand.includes(input[i])){
        return false;
      }
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
    }
    return true;
  },
  scoreWord(word) {
    let sumScore = 0;
    for (let i = 0; i < word.length; i++) {
      sumScore += scoredWords[word[i].toUpperCase()];
    }
    if (word.length >= 7) {
      return sumScore + 8;
    } else {
      return sumScore;
    }
  },
  highestScoreFrom (words) {
    let maxSum = 0;
    let maxIndex = 0;
    for (let i = 0; i < words.length; i++) {
      const sumScore = this.scoreWord(words[i]);
      if (sumScore > maxSum) {
        maxSum = sumScore;
        maxIndex = i;
      } else if(sumScore === maxSum) {
        if (words[maxIndex].length !== words[i].length && words[i].length === 10) {
          maxIndex = i;
        } else if (words[maxIndex].length !== 10 && words[i].length  < words[maxIndex].length) {
          maxIndex = i;
        }
      }
    }
    return {'word': words[maxIndex], 'score': maxSum};
  }
};
export default Adagrams;
