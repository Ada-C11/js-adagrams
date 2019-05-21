const Adagrams = {
  drawLetters() {

    // Implement this method for wave 1

      const AllLetters = ['a','a','a','a','a','a','a','a','a','b','b','c','c','d','d','d','d','e','e','e','e','e','e','e','e','e','e','e','e','f','f','g','g','g','h','h','i','i','i','i','i','i','i','i','i','j','k','l','l','l','l','m','m','n','n','n','n','n','n','o','o','o','o','o','o','o','o','p','p','q','r','r','r','r','r','r','s','s','s','s','t','t','t','t','t','t','u','u','u','u','v','v','w','w','x','y','y','z'];
      const handy = [];
      for (let i = 1; i < 11; i++) {
        let index = [Math.floor(Math.random()*AllLetters.length)];
        let removed = AllLetters.splice(index, 1);
        let removed2 = removed.pop()
        // console.log(removed2);
        // console.log(typeof removed2);
        handy.push(removed2.toUpperCase());
      }
      return handy;
    }
  };



// Do not remove this line or your tests will break!
export default Adagrams;
