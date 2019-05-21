const Adagrams = {
  drawLetters() {
    //Populate letterBank array with available letters
    const letters = { A: 9, B: 2, C: 2, D: 4, E: 12, 
    F: 2, G: 3, H: 2, I: 9, J: 1,
    K: 1, L: 4, M: 2, N: 6, O: 8,
    P: 2, Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1};

    const letterBank = []
    let lettersLength = Object.keys(letters).length

    for (let i = 0; i < lettersLength; i += 1) {

      let letterCount = Object.values(letters)[i];
      let letter = Object.keys(letters)[i];

      while (letterCount > 0) {
        letterBank.push(letter);
        letterCount -= 1;
      };
    };

    //Draw random letters
    let randomLetters = []
    let bankLength = letterBank.length
    for ( let i = 0; i < 10; i += 1 ) {
      let letterBankCopy = letterBank.slice();
      let randIndex = Math.floor(Math.random() * bankLength);

      randomLetters.push(letterBankCopy[randIndex]);
      letterBankCopy = letterBankCopy.splice(randIndex, 1);
   };
   return randomLetters
}

}

// console.log(Adagrams.drawLetters())

// Do not remove this line or your tests will break!
export default Adagrams;
