const Adagrams = {
 
  drawLetters() {
    const letterPool = { A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2, I: 9, J: 1, K:1, L: 4, M: 2, N: 6, O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1, Y: 2, Z: 1 }
    
      const letterArray = [] 
      // call forEach on entries and add it to letterArray
      Object.entries(letterPool).forEach(function (entry){
        const letter = entry[0];
        const value = entry[1];
        console.log(value);
        for (let i = 0; i < value; i += 1){

          letterArray.push(letter);
          console.log(letterArray);
        }
      }
      )
      // letterArray.forEach( function(entry){
      //     const letter = entry[0]; 
      //     const value = entry[1];
      //     for (let i = 0; i < value; i += 1){

      //       letterArray.concat(letter);
      //       console.log(letterArray);
      //     }
      //   });
      for (let i = 0; i < 10; i += 1){
      // make something that will return 10 random letters 
      let letterHand = letterArray[Math.floor(Math.random()*letterArray.length)];   
      
      console.log(letterHand);
    }
    // return letterHand
    // console.log(letterStuff);
  
   
  
    // alert(letterArray[Math.floor ( Math.random(10) * letterArray.length )])
  

   
  },
  

  
};
console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
// export default Adagrams;
