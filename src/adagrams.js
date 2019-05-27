const letterPool = ['A','A','A','A','A','A','A','A','A','B','B','C','C','D','D','D','D',
                    'E','E','E','E','E','E','E','E','E','E','E','E',
                    'F','F','G','G','G','H','H','I','I','I','I','I','I','I','I','I',
                    'J','K','L','L','L','L','M','M','N','N','N','N','N','N',
                    'O','O','O','O','O','O','O','O','P','P','Q','R','S','S','S','S',
                    'T','T','T','T','T','T','U','U','U','U','V','V','W','W',
                    'X','Y','Y','Z']


const Adagrams = {
  
  drawLetters() {
    // Implement this method for wave 1
    const shuffled = letterPool.sort(()=> 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    return selected;
  },
  usesAvailableLetters(input, lettersInHand){
    input = Array.from(input);
    for(let i = 0; i < input.length; i += 1) {
      if (!lettersInHand.includes(input[i])){
        return false;
      }
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
    }
    return true;
  }
};

// let lettersInHand = ['B','C','D']
// console.log(Adagrams.usesAvailableLetters('ABC',lettersInHand));



// Do not remove this line or your tests will break!
export default Adagrams;
