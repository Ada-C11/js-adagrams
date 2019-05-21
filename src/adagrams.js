const Adagrams = {
  drawLetters() {
    let letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'.split('');
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      const letterIndex = letterPool.indexOf(letterPool[Math.floor(Math.random()*letterPool.length)]);
      hand.push(letterPool[letterIndex]);
      letterPool.splice(letterIndex, 1);
    }
    return hand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
