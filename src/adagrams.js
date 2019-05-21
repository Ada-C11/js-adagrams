const Adagrams = {
  letters: ["A", "A", "A", "A", "A", "A", "A", "A", "A", 
            "B", "B", "C", "C", "D", "D", "D", "D", "E", 
            "E", "E", "E", "E", "E", "E", "E", "E", "E",
            "E", "E", "F", "F", "G", "G", "G", "H", "H",
            "I", "I", "I", "I", "I", "I", "I", "I", "I", 
            "J", "K", "L", "L", "L", "L", "M", "M", "N", 
            "N", "N", "N", "N", "N", "O", "O", "O", "O", 
            "O", "O", "O", "O", "P", "P", "Q", "R", "R", 
            "R", "R", "R", "R", "S", "S", "S", "S", "T", 
            "T", "T", "T", "T", "T", "U", "U", "U", "U", 
            "V", "V", "W", "W", "X", "Y", "Y", "Z"],
  drawLetters() {
    let drawnLetters = [];
    for(let i = 0; i < 10; i += 1){
      const letterCount = this.letters.length;
      const randomIndex = Math.floor(Math.random() * Math.floor(letterCount));
      const selectIndex = letterCount - 1 - i;
      const temp = this.letters[selectIndex]; 
      this.letters[selectIndex] = this.letters[randomIndex];
      this.letters[randomIndex] = temp;
      drawnLetters.push(this.letters[selectIndex]);
    }
    return drawnLetters;
    },
  };

// Do not remove this line or your tests will break!
console.log(Adagrams.letters.length);
console.log(Adagrams.drawLetters());
console.log(Adagrams.letters.length);
// export default Adagrams;
