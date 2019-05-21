const letterArray = ['a','a','a','a','a','a','a','a','a','b','b','c','c','d','d','d','d',
                  'e','e','e','e','e','e','e','e','e','e','e','e',
                  'f','f','g','g','g','h','h','i','i','i','i','i','i','i','i','i',
                  'j','k','l','l','l','l','m','m','n','n','n','n','n','n',
                  'o','o','o','o','o','o','o','o','p','p','q','r','s','s','s','s',
                  't','t','t','t','t','t','u','u','u','u','v','v','w','w',
                  'x','y','y','z']


const Adagrams = {
  
  drawLetters() {
    // Implement this method for wave 1
    const shuffled = letterArray.sort(()=> 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    return selected;
  }
};

console.log(Adagrams.drawLetters());



// Do not remove this line or your tests will break!
// export default Adagrams;
