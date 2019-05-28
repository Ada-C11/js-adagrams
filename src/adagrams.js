const Adagrams = {
  drawLetters() {
      const AllLetters = ['a','a','a','a','a','a','a','a','a','b','b','c','c','d','d','d','d','e','e','e','e','e','e','e','e','e','e','e','e','f','f','g','g','g','h','h','i','i','i','i','i','i','i','i','i','j','k','l','l','l','l','m','m','n','n','n','n','n','n','o','o','o','o','o','o','o','o','p','p','q','r','r','r','r','r','r','s','s','s','s','t','t','t','t','t','t','u','u','u','u','v','v','w','w','x','y','y','z'];
      const handy = [];
      for (let i = 1; i < 11; i++) {
        let index = [Math.floor(Math.random()*AllLetters.length)];
        let removed = AllLetters.splice(index, 1);
        let removed2 = removed.pop()
        handy.push(removed2.toUpperCase());
      }
      return handy;
  },
  usesAvailableLetters (input, lettersInHand) {
    let value = true;
    [...input].forEach(letter => {
      // ugh forEach CAN"T BE ESCAPED WITH A RETURN OR BREAK
      // for(x in y) use in for objects
      // for(x of y) for strings or arrays or anything else
      let index = lettersInHand.indexOf(letter);
      if (index === -1) {
        value = false;
      } else {
        lettersInHand.splice(index, 1);
      }
    })
    return value;
  },
  scoreWord (word) {
    const tile = {
      'a': 1,
      'b': 3,
      'c': 3,
      'd': 2,
      'e': 1,
      'f': 4,
      'g': 2,
      'h': 4,
      'i': 1,
      'j': 8,
      'k': 5,
      'l': 1,
      'm': 3,
      'n': 1,
      'o': 1,
      'p': 3,
      'q': 10,
      'r': 1,
      's': 1,
      't': 1,
      'u': 1,
      'v': 4,
      'w': 4,
      'x': 8,
      'y': 4,
      'z': 10,
    }

    // so I know I'm updating score, but I"M JUST GOING TO UPDATE IT so shouldn't I be allowed to use a const?
    let score = 0;

    [...word].forEach(letter => {
      letter = letter.toLowerCase();
      // WHY CAN"T I USE tile.letter?
      // Cause its a string 'b' instead of b right?
      // is there a good work around?
      score += tile[letter];
    });

    if (word.length === 7 || word.length === 8 || word.length === 9 || word.length === 10 ) {
      score += 8
    }

    return score;
  },
  highestScoreFrom (words) {
    const allScores = [];
    let max = 0;
    for (let word of words) {
    // const scores = words.reduce((allScores, word) => {
      // this is THE WORST WAY TO DO THIS because it creates { a: 1, dog: 5, wHiMsY: 17 }
      // I want it to create {{ word: 'wHiMsY', score: 17 }}
      // but with an accumulator I can only figure it out how to get it like {
      //   a: { word: 'a', score: 1 },
      //   dog: { word: 'dog', score: 5 },
      //   god: { word: 'god', score: 5 }
      // }
      // WHICH CREATES ALL THE USELESS CODE ALL THE WAY DOWN
        // allScores[word] = this.scoreWord(word);
        // below creates { word: 'god', score: 5 } but only one cause the accumulator gets overwritten?
        // allScores = { 'word': word, 'score': this.scoreWord(word) };
        // return allScores;
        let score = this.scoreWord(word);
        if (score > max) {
          max = score;
        }
        allScores.push({ 'word': word, 'score': this.scoreWord(word) });
        
    }
    // []);
    // this reduce IS FUCKING USELESS BECAUSE NOW ITS IN A FORM THAT IS A PAIN IN MY ASS TO DEAL WITH FOR NEXT LOGIC :(
    // let highs = [];
    // let high =  Math.max(...Object.values(scores));
    // for (let word in scores) {
    //   if (scores[word] === high) {
    //     highs.push({  'word': word ,  'score': scores[word] });
    //   }
    // }
    // const results = allScores.filter(result => result.score === max);
    // or even let results = allScores.filter(result => result.score === max);
    // id really like to know why the above doesnt work buuut
    let results;
    results = allScores.filter(result => result.score === max);


    if (results.length === 1) {
      return results[0];
    } else {
      let shortest = results[0];
      for (let result of results) {
    //     // of needs to be used to get the object, in just gets the index number?
        if (result.word.length === 10) {
          return result;
        } else if (result.word.length < shortest.word.length) {
          shortest = result;
        }
      }
      return shortest;
    }
  },
};

// Adagrams.highestScoreFrom(['a','dog','god']);
// console.log(Adagrams.highestScoreFrom(['a','dog','god']));
// console.log(Adagrams.highestScoreFrom(['a','dog','wHiMsY']));
// console.log(Adagrams.usesAvailableLetters('DOG', ['D','O','G','A','A','A','A','A','A','A']));
// console.log(Adagrams.usesAvailableLetters('DOOG', ['D','O','G','A','A','A','A','A','A','A']));


// Do not remove this line or your tests will break!
export default Adagrams;

