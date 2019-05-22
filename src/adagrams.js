class Adagrams {
    static drawLetters() {
        // Implement this method for wave 1
        const letterPool = {
            'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
        };
        const bagOfLetters = [];

        for (let key in letterPool){
            for(let i = 0; i < letterPool[key]; i += 1){
                bagOfLetters.push(key);
            }
        }

        let hand = [];
        for (let i = 0; i < 10; i += 1) {
            let randomIndex = Math.floor(Math.random() * bagOfLetters.length);

            if(bagOfLetters.includes(bagOfLetters[randomIndex])){
                hand.push(bagOfLetters[randomIndex]);
                bagOfLetters.splice(bagOfLetters.indexOf(bagOfLetters[randomIndex]), 1);
            }
        }
        hand.forEach((letter) => bagOfLetters.push(letter));
        return hand;
    }

    static usesAvailableLetters(input, lettersInHand) {
        let inputArray = input.split('');
        let clonedLettersInHand = lettersInHand.slice(0);

        for (let i = 0; i < inputArray.length; i += 1) {
            if (clonedLettersInHand.includes(inputArray[i])) {
                clonedLettersInHand.splice(inputArray[i], 1);
            } else {
                return false;
            }
        }
        return true;
    }

    static scoreWord(word){
        const scoreChart = {
            'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
        };

        let score = 0;
        for(let i = 0; i < word.length; i += 1){
            let letter = word.toUpperCase();
            score += scoreChart[letter[i]];
        }

        if (word.length > 6 && word.length < 11){
            score += 8;
        }
        return score;
    }

    static highestScoreFrom(words){
        let winningWord = {
            word: null,
            'score': 0,
        };

        for(let word of words){
            if(this.scoreWord(word) > winningWord['score']){
                winningWord['score'] = this.scoreWord(word);
                winningWord['word'] = word;

            } else if (this.scoreWord(word) === winningWord['score']){
                if(word.length === 10 && winningWord['word'].length != 10){
                    winningWord['word'] = word;
                } else if ((word.length < winningWord['word'].length) && (winningWord['word'].length != 10)) {
                    winningWord['word'] = word;
                }
            }
        }
    
        return winningWord;
    }
}

// Adagrams.scoreWord('cat');
// Do not remove this line or your tests will break!
export default Adagrams;