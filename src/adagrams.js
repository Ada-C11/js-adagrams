// const declarations mantain constant values 
// name of the function 
const Adagrams = {
  drawLetters() {
    const letters = [
    "A", "A", "A", "A", "A", "A", "A", "A", "A",// A: 9
    "B", "B", // B: 2
    "C", "C", // C: 2
    "D", "D", "D", "D", // D: 4
    "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", // E:12
    "F", "F", // F: 2
    "G", "G", "G", //G:3
    "H", "H", // H: 2
    "I", "I", "I", "I", "I", "I", "I", "I", "I", // I:9
    "J", // J: 1
    "K", // K: 1
    "L", "L", "L", "L", // L: 4
    "M", "M", // M:2
    "N", "N", "N", "N", "N", "N", // N:6
    "O", "O", "O", "O", "O", "O", "O", "O", // O:8
    "P", "P", // P:2
    "Q", // Q: 2
    "R", "R", "R", "R", "R", "R", // R:6
    "S", "S", "S", "S", // S:4
    "T", "T", "T", "T", "T", "T", // T:6
    "U", "U", "U", "U", // U:4
    "V", "V", // V:2
    "W", "W", // W : 2
    "X", // X: 1
    "Y", "Y", // Y: 2
    "Z" // Z: 1
  ];

  let lettersInHand = []
  for (let i = 0; i < 10; i++) { //for (int i = 0; i < array.length; i++)
    const letterPool = (letters)//Invoking this function should not change the pool of letters (makes copy)
    let randomLetters = letterPool.splice(Math.floor(letterPool.length * Math.random()), 1)[0];// splice remove one at index [0]
    lettersInHand.push(randomLetters);//
  }
  return lettersInHand;
 },

 usesAvailableLetters(input, lettersInHand) {
 let inputWord = input.split(""); // split input from user Array ["T", "h", "e"]

 for (let letter of inputWord) { // for every letter in input 
  let index = lettersInHand.indexOf(letter);//  locate values of letter in an array.
  if (index != -1) { //-1 if letter is not present.
    lettersInHand.splice(index, 1);//removes the letter if present
  } else {
    return false;
  }
}
return true;
}

};

// how to know if it uses available letters
//console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
export default Adagrams;
