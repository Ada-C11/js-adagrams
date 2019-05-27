// Distribution of Letters
const Letters = {};
Letters['A'] = 9;
Letters['B'] = 2;
Letters['C'] = 2;
Letters['D'] = 4;
Letters['E'] = 12;
Letters['F'] = 2;
Letters['G'] = 3;
Letters['H'] = 2;
Letters['I'] = 9;
Letters['J'] = 1;
Letters['K'] = 1;
Letters['L'] = 4;
Letters['M'] = 2;
Letters['N'] = 6;
Letters['O'] = 8;
Letters['P'] = 2;
Letters['Q'] = 1;
Letters['R'] = 6;
Letters['S'] = 4;
Letters['T'] = 6;
Letters['U'] = 4;
Letters['V'] = 2;
Letters['W'] = 2;
Letters['X'] = 1;
Letters['Y'] = 2;
Letters['Z'] = 1;

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
    const lettersInHand = [];
    let i = 0;
    while(i < 10) {
      const randomNum = Math.floor(Math.random() * 25) + 0; // returns a random integer from 1 to 26
      const randomChar = String.fromCharCode(65 + randomNum);
      if (Letters[randomChar] > 0) {
        Letters[randomChar] = Letters[randomChar] - 1;
        lettersInHand.push(randomChar);
        i++;
      }
    }
    return lettersInHand;
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
