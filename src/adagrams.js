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
  let index = lettersInHand.indexOf(letter);// index of where the letter can be found in the array
  if (index != -1) { //-1 if letter is not present.
    lettersInHand.splice(index, 1);//removes all the letters if present
  } 
  else {
    return false;
  }
}
return true;
},

scoreWord(word){ //The  // Wave 3
  const valueOne = [ "A", "E", "I", "O", "U", "L", "N", "R", "S", "T"	]; //Arrays, things happen inside the function     
  const valueTwo = ["D", "G"];	     
  const valueThree = ["B", "C", "M", "P"];	     
  const valueFour = ["F", "H", "V", "W", "Y"];	     
  const valueFive = ["K"];	     
  const valueEight = ["J", "X"];	     
  const valueTen = ["Q", "Z"];	          
  let splitWord = word.toUpperCase().split("");   // ["T", "H", "E"] 
  let wordLength = word.length;
  let score = 0;     
  
  for (let letter of splitWord) {//E  -  score = 6
    if(valueOne.indexOf(letter)>-1){
      score = score + 1;
    }
    if(valueTwo.indexOf(letter)>-1){
      score = score + 2;
    }
    if(valueThree.indexOf(letter)>-1){
      score = score + 3;
    }
    if(valueFour.indexOf(letter)>-1){
      score = score + 4;
    }
    if(valueFive.indexOf(letter)>-1){
      score = score + 5;
    }
    if(valueEight.indexOf(letter)>-1){
      score = score + 8;
    }
    if(valueTen.indexOf(letter)>-1){
      score = score + 10;
    }
  }

  if(wordLength >= 7 && wordLength <= 10) {
    score = score + 8;
  }

  return score;
  }
};

// how to know if it uses available letters
//console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
export default Adagrams;
