const Adagrams = {
  drawLetters() {
    const allLetters = { A: 9, B: 2, C:2, D:4, E:12, F:2, 
      G:3, H:2, I:9, J: 1, K:1, L:4, M: 2, N:6, O:8, P:2, Q:1, R:6, S:4,
      T:6, U:4, V:2, W:2, X:1, Y:2, Z:1
    }

    const wordArray = []
    for (let letter in allLetters) {
      for (let i = 0; i < allLetters[letter]; i += 1) {
        wordArray.push(letter);
      }
    }

    const lettersInHand = []
    for (let j = 0; j < 10; j += 1) {
      const randomLetter = wordArray[(Math.floor(Math.random() * 26 ))];
      lettersInHand.push(randomLetter);
    }
    return lettersInHand;
  },
  usesAvailableLetters(input, lettersDrawn){
    let lettersDrawnCopy = [...lettersDrawn];
    let hand = input.toUpperCase().split('');

    for (let ltr in hand) {
      if(lettersDrawnCopy.includes(hand[ltr])){
        lettersDrawnCopy.splice(lettersDrawnCopy.indexOf(hand[ltr]), 1);
      } else {
        return false;
      }
    }
    return true;
  },
  scoreWord(word){
    if(word.length === 0) {
      return 0;
    }
    const scoreRubric = { 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,
      'N': 1, 'R': 1, 'S': 1, 'T':1, 
      'D': 2, 'G': 2, 
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4, 
      'K': 5, 
      'J': 8, 'X':8, 
      'Q': 10, 'Z': 10 
    }
    let total = 0;
    const keys = word.toUpperCase().split('')

    keys.forEach(letter => {
      total += scoreRubric[letter];
    })
    if(word.length > 6 && word.length < 11) {
      total += 8
    }

    if(total){
      return total;
    } else {
      return 1;
    }

  },

  highestScoreFrom(words){
    const scores = words.map(this.scoreWord)
    const highestScore = scores.reduce((hs, score) => hs < score ? score : hs, 0);
    const tiedWords = [];
   
    for (let i in words){
      if(words[i].length == 10) {
        return {score: this.scoreWord(words[i]), word: words[i]};
      }
    }
    
    let allScores = {};
   
    words.forEach(word => {
      allScores[word] = this.scoreWord(word);
    })

    
    for (let i in allScores) {
      if (allScores[i] == highestScore) {
        tiedWords.push(i);
      }
    }

    if (tiedWords.length == 1) {
      return { "score": highestScore, "word": tiedWords[0] }
    } else {
      const shorterLen = tiedWords.reduce((i, n) => Math.min(i.length, n.length));
      const winner = tiedWords.filter(word => word.length == shorterLen)[0];
      return { word: winner, score: highestScore };
    }
  },
}

// Do not remove this line or your tests will break!
export default Adagrams;