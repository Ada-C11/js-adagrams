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

  usesAvailableLetters(input, lettersInHand) {
    const inputArr = input.split('');
    for (const char in inputArr) {
      if (!lettersInHand.includes(inputArr[char])) {
        return false;
      }
      const ltrIndex = lettersInHand.indexOf(inputArr[char]);
      lettersInHand.splice(ltrIndex, 1);
    }
    return true;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
