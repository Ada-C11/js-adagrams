const _ = require('lodash')

const letterPool = {
  'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2,
  'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1,
}

const Adagrams = {
  // return the number of times a single (case insensitive) char occurs inside the container it's in
  // letterCount(char, container) {
  //   return (container.match(/char/gi) || []).length
  // },


  drawLetters() {
    const keys = Object.keys(letterPool);
    const length = keys.length;
    let lettersInHand = [];

    for (let i = 0;i < 10;i += 1) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomKey = keys[randomIndex];
      lettersInHand.push(randomKey);
    }
    return lettersInHand;
  },

  usesAvailableLetters(input, lettersInHand) {
    let duplicateLettersInHand = lettersInHand.sort();
    const sortedInputArray = input.split('');

    let array = []
    for (let letter of input) {
      array.push((duplicateLettersInHand.splice(duplicateLettersInHand.indexOf(letter), 1).toString()))
    }

    if (_.isEqual(array, sortedInputArray)) {
      return true;
    } else {
      return false;
    }
  },


  scoreWord(word) {
    const scoreChart = {
      'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10,
    };

    const upperCaseWord = word.toUpperCase();
    let totalScore = 0;

    if (upperCaseWord.length > 6 && upperCaseWord.length < 11) {
      totalScore += 8;
    }

    for (let i in upperCaseWord) {
      let key = upperCaseWord[i]
      totalScore += scoreChart[key];
    }
    return totalScore;
  },

  highestScoreFrom(words) {

    // const allScores = words.map((word) => this.scoreWord(word));
    const allScores = words.map((word) => {
      const newWord = {
        'word': word,
        'score': this.scoreWord(word)
      };
      return newWord;
    });


    // iterate over allScores to find the highest score
    // make the highestScore k/v pair from that

    let winningWord = allScores[0];
    for (let i in allScores) {
      if (allScores[i].score > winningWord.score) {
        winningWord.word = allScores[i].word;
        winningWord.score = allScores[i].score;
      }
    }
    return winningWord;
  },


  // console.log(allScores)

  // // compare scores against one another to find highest
  // const highestScore = allScores.reduce((high, current) => high < current ? current : high, 1);
  // const tiedScores = allScores.filter(score => score == highestScore);


  // console.log(`ALL SCORES: ${allScores}`)
  // console.log(`TIED SCORES: ${tiedScores}`)
  // console.log(`HIGHEST SCORES: ${highestScore[0].word}`)


  // // if there is more than 1 word in the tiedScores array, find a word that is 10 letters and set that to the winning word.
  // let shortWord = words[0];
  // if (tiedScores.length > 1) {
  //   console.log("WE HIT PAYDIRT")
  //   for (let i = 0;i < words.length;i += 1) {
  //     if (words[i].length === 10) {
  //       console.log(words[i]);
  //       return words[i];
  //     } else if (words[i].length < shortWord.length) {
  //       shortWord = words[i];
  //     }
  //   }
  //   return shortWord;
  // }

}
//   console.log(`BEST WORD: ${bestWord}`)
//   const bestScore = Adagrams.scoreWord(bestWord)
//   const winningWord = { 'word': bestWord, 'score': bestScore };
// return winningWord;
// }
// const winningWord = { word: high}
//return highestScore;





// }

//Do not remove this line or your tests will break!
export default Adagrams;


