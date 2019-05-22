const Adagrams = {
  drawLetters() {
    const poolOfLetters = [
      "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"
    ];

    let thisHand = poolOfLetters.slice();
    let myLetters = [];
    let shuffleLetters = Math.floor(Math.random() * thisHand.length);
    for (let i = 0; i < 10; i +=1) {
      myLetters.push(thisHand[shuffleLetters]);
      thisHand.splice( shuffleLetters, 1 );
    }
    return myLetters;
  //  console.log(myLetters);
  },
} 
console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
// export default Adagrams;
