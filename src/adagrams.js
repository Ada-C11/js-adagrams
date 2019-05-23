const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1

    let letters = [
      'A','A','A','A','A','A','A','A','A',
      'B','B',
      'C','C',
      'D','D','D','D',
      'E','E','E','E','E','E','E','E','E','E','E','E',
      'F','F',
      'G','G','G',
      'H','H',
      'I','I','I','I','I','I','I','I','I',
      'J','J',
      'K',
      'L','L','L','L',
      'M','M',
      'N','N','N','N','N','N',
      'O','O','O','O','O','O','O','O',
      'P','P',
      'Q',
      'R','R','R','R','R','R',
      'S','S','S','S',
      'T','T','T','T','T','T',
      'U','U','U','U',
      'V','V',
      'W','W',
      'X',
      'Y','Y',
      'Z',
    ];

    let number = letters.length;
    
    function getRandomInt(number) {
      return Math.floor(Math.random() * Math.floor(number));
    }

    let randomIndexes = [];

    for (let i = 0; i < 10; i += 1){
      let random = getRandomInt(number);
      if (randomIndexes.includes(random)){
        getRandomInt(number);
        i -= 1
      } else {
        randomIndexes.push(random);
      }
    }
    
    let hand = [];
    randomIndexes.forEach(function(index){
      hand.push(letters[index]);
    });

    return hand;

  },

  usesAvailableLetters(input,lettersInHand){

    let lettersInput = input.split('');
    if (lettersInput.length <= 10){
      for (let i = 0; i< lettersInput.length; i += 1 ){
        let index = lettersInHand.indexOf(lettersInput[i])
        if (index != -1){
      
          lettersInHand[index] = 0;
          
        } else {
          return false;
        }
      }
      return true;   
    } else {
      return false;
    }

  },

  scoreWord(word){

    let wordCaps = word.toUpperCase();

    const scores = {
      'AEIOULNRST': 1,
      'DG': 2,
      'BCMP': 3,
      'FHVWY': 4,
      'K': 5,
      'JX': 8,
      'QZ': 10,
    }

    let scoreGroups = Object.keys(scores);
    let lettersInWord = wordCaps.split('');
    let totalScore = 0

    if (lettersInWord.length >= 7){
      totalScore = 8;
    }

    lettersInWord.forEach( function (letter){
      for (let i = 0; i < scoreGroups.length; i+= 1){
        if (scoreGroups[i].includes(letter)){
          totalScore += scores[scoreGroups[i]];
        }
      }
    });

    return totalScore;

  },

  highestScoreFrom(words){

    let highestScoreWord = {
      'word': '',
      'score': 0,
    }
 

    words.forEach( function (word){

      if (Adagrams.scoreWord(word) > highestScoreWord['score']){

        highestScoreWord['score'] = Adagrams.scoreWord(word);
        highestScoreWord['word'] = word;

        console.log(highestScoreWord);
      
      // console.log(Adagrams.scoreWord(word));
      } else if (Adagrams.scoreWord(word) == highestScoreWord['score']){
        if 

      }
    });
    




  //   return // hash - word: string  score: integer

  }
  
};
// console.log(Adagrams.drawLetters());
// console.log(Adagrams.usesAvailableLetters('mmuilpp',['l','m','p','i','u','p','m']))
// console.log(Adagrams.scoreWord('HELLOHHOOOO'));
console.log(Adagrams.highestScoreFrom(['AAMOEXX','POLDRS']));

// Do not remove this line or your tests will break!
// export default Adagrams;


  
    