class Adagrams {
  drawLetters() {
    const amountOfLetters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A", 
      "B", "B",
      "C", "C",
      "D", "D", "D", "D",
      "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
      "F", "F",
      "G", "G", "G",
      "H", "H",
      "I", "I", "I", "I", "I", "I","I", "I", "I",
      "J",
      "K",
      "L", "L", "L", "L",
      "M", "M",
      "N", "N", "N", "N", "N", "N",
      "O", "O", "O", "O", "O", "O", "O", "O",
      "P", "P",
      "Q",
      "R", "R", "R", "R", "R", "R",
      "S", "S", "S", "S",
      "T", "T", "T", "T", "T", "T",
      "U", "U", "U", "U",
      "V", "V",
      "W", "W",
      "X",
      "Y", "Y",
      "Z"
    ];

    let playersLetters = [];
    let randomLetters = amountOfLetters.slice();

    for (let i = 0; i < 10; i += 1) {
          const randomLettersIndex = Math.floor(Math.random() * (randomLetters.length));
          playersLetters.push(randomLetters[randomLettersIndex]);
          randomLetters.splice(randomLettersIndex, 1);
    }
 
    return playersLetters;
  }

  usesAvailableLetters(input, lettersInHand) {
    for (var i = 0; i < input.length; i += 1) {
      const letter = input.charAt(i);
      const index = lettersInHand.findIndex(function(element){
        return letter == element;
      })
      if (index != -1) {
        lettersInHand.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  }

  scoreWord(word) {
    if (word === "" || typeof word !== 'string') {
      return 0;
    } 
    const letterToValue = new Map([
      ["A", 1],
      ["E", 1],
      ["I", 1],
      ["O", 1],
      ["U", 1],
      ["L", 1],
      ["N", 1],
      ["R", 1],
      ["S", 1],
      ["T", 1],
      ["D", 2],
      ["G", 2],
      ["B", 3], 
      ["C", 3],
      ["M", 3],
      ["P", 3],
      ["F", 4],
      ["H", 4],
      ["V", 4],
      ["W", 4],
      ["Y", 4],
      ["K", 5],
      ["J", 8], 
      ["X", 8],
      ["Q", 10],
      ["Z", 10],
    ])
    let points = word.split("").map(
      letter => letterToValue.get(letter.toUpperCase())).reduce((a, v)=>a + v);
    if (word.length >= 7) {
      points += 8;
    }
    return points;
  }

  highestScoreFrom(words) {
    const scoreList = words.map(word => [word, this.scoreWord(word)]);
    let largestScore = [null, 0];

    for (let i = 0; i < scoreList.length; i += 1) {
      if (scoreList[i][1] > largestScore[1]) {
        largestScore = scoreList[i];
      } else if (scoreList[i][1] == largestScore[1]) {
        if (largestScore[0].length === 10) {
          continue;
        } else if (scoreList[i][0].length === 10) {
          largestScore = scoreList[i];
        } else if (scoreList[i][0].length < largestScore[0].length) {
          largestScore = scoreList[i];
        }
      }
    }
    return {
      word: largestScore[0],
      score: largestScore[1]
    }
  }
};

export default Adagrams;