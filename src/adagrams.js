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
    let splitInput = input.split('');
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
  }
}


// console.log(Adagrams.drawLetters());
// console.log(Adagrams.usesAvailableLetters());
// Do not remove this line or your tests will break!
export default Adagrams;
