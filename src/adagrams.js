const Adagrams = {
  drawLetters() {
    const poolOfLetters = [
      'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'
  ];

  let myLetters = [];
  let randomLetters = poolOfLetters.slice();
  
    for (let i = 0; i < 10; i += 1) {
        const randomIndex = Math.floor(Math.random() * (randomLetters.length));
        myLetters.push(randomLetters[randomIndex]);
        randomLetters.splice(randomIndex, 1);
    }
    return myLetters;
  },

  usesAvailableLetters(input, lettersInHand) {
    const splitInput = input.split('');
    if (splitInput.length <= 10) {
      for (let i = 0; i < splitInput.length; i += 1) {
        if (!lettersInHand.includes(splitInput[i])) {
          return false;
        }
        let letterIndex = lettersInHand.indexOf(splitInput[i]);
        lettersInHand.splice(letterIndex, 1);
      }
     return true;
    }
  },

  scoreWord(word) {
    const letterPoints = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D':2, 
      'E':1, 
      'F':4, 
      'G':2, 
      'H':4, 
      'I':1, 
      'J':8, 
      'K':5, 
      'L':1, 
      'M':3, 
      'N':1, 
      'O':1, 
      'P':3, 
      'Q':10, 
      'R':1, 
      'S':1, 
      'T':1, 
      'U':1, 
      'V':4, 
      'W':4, 
      'X':8, 
      'Y':4, 
      'Z':10,
    };

    let myScore = 0;

    if (word === '') {
      return myScore;
    }

    let wordToScore = word.toUpperCase().split('');
    let scoreMap = wordToScore.map(eachLetter => letterPoints[eachLetter]);
    const scoring = (totalScore, letterValue) => totalScore + letterValue;
 
    myScore = scoreMap.reduce(scoring);

    if (wordToScore.length > 6) {
      return myScore += 8;
    }
    return myScore;
  },

  highestScoreFrom(words) {
  let winner = {
    word: '',
    score: 0,
  }

  words.forEach((word) => {
    const currentScore = this.scoreWord(word);

    if (currentScore > winner.score) {
      winner.score = currentScore;
      winner.word = word;
    } else if (currentScore === winner.score) {
      if ((word.length === 10 && winner.word.length != 10) ||
      (word.length < winner.word.length && winner.word.length != 10)) {
        winner.score = currentScore;
        winner.word = word;
      }
    }
  });

  return winner;
  }
}


export default Adagrams;
