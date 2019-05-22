const Adagrams = {
  drawLetters() {
    let hand = []
    let letterPool = []
    const numberOfLetters = [9, 2, 2, 3, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1]
    const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let letterArray = letters.split('')
    let k = 0
    numberOfLetters.forEach( function(number) {
      for (let i = 0; i < number; i += 1 ) {
        letterPool.push(letterArray[k]);
      }
      k += 1;
    });
    let shuffledLetters = letterPool.sort(() => 0.5 - Math.random());
    
    hand = shuffledLetters.slice(0, 10);
    return hand
  },
  usesAvailableLetters(input, lettersInHand) {
    let inputLetters = input.split("");
    let handLetterHash = {}
    lettersInHand.forEach( function(letter) {
      if (handLetterHash[letter] == null) {
        handLetterHash[letter] = 1;
      } else {
        handLetterHash[letter] += 1;
      }
    });
    for (let i = 0; i < input.length; i += 1) {
      if (handLetterHash[inputLetters[i]] == null || handLetterHash[inputLetters[i]] == 0) {
        return false;
        break;
      } else {
        handLetterHash[inputLetters[i]] -= 1;
      }
    }
    return true;
    },
    scoreWord(word) {
      let scoreHash = {"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10};
      let wordLetters = word.toUpperCase().split('');
      let total = 0;
      if ([7, 8, 9, 10].includes(word.length)) {
        total += 8;
      }
      wordLetters.forEach( function(letter) {
        total += scoreHash[letter];
      });
      return total
    },
    getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
     },
    highestScoreFrom(words) {
      let winningWord = {};
      let allWordsAndScores = {};
      words.forEach( function(gameword) {
        allWordsAndScores[gameword] = Adagrams.scoreWord(gameword);
      });
      let scores = Object.values(allWordsAndScores)
      let highestScore = Math.max(...scores);
      let highestScoreWords = [];
        for (const [key, value] of Object.entries(allWordsAndScores)) {
          if (key.length === 10 && value === highestScore) {
            winningWord['word'] = key
            winningWord['score'] = highestScore
            return winningWord;
          } else if (value === highestScore){
            highestScoreWords.push(key);
          }
          }
          console.log(allWordsAndScores)
          console.log(highestScoreWords)
          let shortestWord = "";
          let shortestLength = Math.max(...(highestScoreWords.map(el => el.length)))
      
      if (highestScoreWords.length == 1) {
            winningWord['word'] = highestScoreWords[0]
            winningWord['score'] = highestScore
            return winningWord
      } else {
        for (let word in highestScoreWords) {
          if (highestScoreWords[word].length < shortestLength) {
            shortestWord = highestScoreWords[word];
            shortestLength = highestScoreWords[word].length;
          }
        }
      }
      winningWord['word'] = shortestWord
      winningWord['score'] = allWordsAndScores[shortestWord]
      console.log(shortestWord)
      console.log(winningWord)
      return winningWord
      }
    };

// Do not remove this line or your tests will break!
export default Adagrams;

