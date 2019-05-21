const Adagrams = {
  drawLetters() {
    const letterPool = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ'.split('');
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      hand.push(letterPool[Math.floor(Math.random()*letterPool.length)]);
    }
    return hand;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;


