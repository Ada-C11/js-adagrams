const Adagrams = {
    drawLetters() {
        // Implement this method for wave 1
        const bagOfLetters = [
            'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
            'B', 'B',
            'C', 'C', 'C',
            'D', 'D', 'D', 'D',
            'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
            'F', 'F',
            'G', 'G', 'G',
            'H', 'H',
            'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
            'J',
            'K',
            'L', 'L', 'L', 'L',
            'M', 'M',
            'N', 'M', 'M', 'M', 'M', 'M',
            'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
            'P', 'P',
            'Q',
            'R', 'R', 'R', 'R', 'R', 'R',
            'S', 'S', 'S', 'S',
            'T', 'T', 'T', 'T', 'T', 'T',
            'U', 'U', 'U', 'U',
            'V', 'V',
            'W', 'W',
            'X',
            'Y', 'Y',
            'Z', 'Z'
        ];

        let hand = [];
        // loop through the bag of letters and push a letter into the hand array.
        // Do this 10 times
        for (let i = 0; i < 10; i += 1) {
            let randomLetter = Math.floor(Math.random() * bagOfLetters.length);
            hand.push(bagOfLetters[randomLetter]);
        }
        // console.log(hand);
        return hand;
    },

    usesAvailableLetters(input, lettersInHand) {
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
    },

    scoreWord(word){
        let wordArray = word.toUpperCase().split('');

        const scoreChart = {
            'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
        };

        let score = 0;

        for(let i = 0; i < wordArray.length; i += 1){
            score += scoreChart[wordArray[i]];
        }
            console.log(score);
    }
};

Adagrams.scoreWord('cat');
// Do not remove this line or your tests will break!
// export default Adagrams;