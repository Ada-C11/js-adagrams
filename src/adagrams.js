// const gen_letter_array = function gen_letter_array(letter_object) {
//   const array = [];
//   letter_object.forEach()
// }

// letter_freq = {
//   A: 9, N: 6, B: 2, O: 8, C: 2, P: 2, D: 4, Q: 1, E: 12, R: 6, F: 2, S: 4,
//   G: 3, T: 6, H: 2, U: 4, I: 9, V: 2, J: 1, W: 2, K: 1, X: 1, L: 4, Y: 2, M: 2, Z: 1,
// }
// const avail_letters = gen_letter_array(letter_freq);

const shuffle = function shuffle(letters) {
  for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.slice(0,10);
}

const Adagrams = {
  drawLetters() {
      const letterFrequency = [
        "A", "A", "A", "A", "A", "A", "A", "A", "A",
        "B", "B",
        "C", "C",
        "D", "D", "D", "D",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E",
        "F", "F",
        "G", "G", "G",
        "H", "H",
        "I", "I", "I", "I", "I", "I", "I", "I", "I",
        "J",
        "K",
        "L", "L", "L", "L",
        "M", "M",
        "N", "N", "N", "N", "N", "N",
        "O", "O", "O", "O", "O", "O", "O", "O",
        "P", "P",
        "Q",
        "R", "R", "R", "R", "R", "R",
        "S", "S", "S", "S",
        "T", "T", "T", "T", "T", "T",
        "U", "U", "U", "U",
        "V", "V",
        "W", "W", "X",
        "Y", "Y",
        "Z",
      ];
    const hand = shuffle(letterFrequency);
    console.log(letterFrequency.length);
    return hand;
    },
};
// Do not remove this line or your tests will break!
export default Adagrams;

// # Validates input word by determining if it can be formed with letters in hand
// def uses_available_letters?(input, letters_in_hand)
//   if !(input.is_a?(String))
//     raise ArgumentError, "Ummmmmm the value for the first argument needs to be a string, ok? Given value: #{input}"
//   elsif !(letters_in_hand.is_a?(Array))
//     raise ArgumentError, "The second argument should be an array. That doesn't look right...Given value: #{letters_in_hand}"
//   end
//   if input.length > letters_in_hand.length
//     return false
//   else
//     # reassigning letters_in_hand to new variable in order to avoid destruction of original array
//     possible_letters = letters_in_hand.clone
//     input.upcase.split(//).each do |char|
//       if possible_letters.include?(char)
//         possible_letters.delete(char)
//       else
//         return false
//       end
//     end
//   end
//   return true
// end

// # Scores each word
// def score_word(word)
//   letter_score = {
//     A: 1, N: 1, B: 3, O: 1, C: 3, P: 3, D: 2, Q: 10, E: 1, R: 1, F: 4, S: 1,
//     G: 2, T: 1, H: 4, U: 1, I: 1, V: 4, J: 8, W: 4, K: 5, X: 8, L: 1, Y: 4, M: 3, Z: 10,
//   }

//   word_score = word.upcase.split(//).reduce(0) do |memo, char|
//     memo += letter_score[char.to_sym]
//   end

//   word_score += 8 if word.length >= 7
//   return word_score
// end

// # Returns a single hash that represents the data of a winning word and its score.
// def highest_score_from(words)
//   winner = {
//     word: "",
//     score: 0,
//   }

//   words.each do |word|
//     if score_word(word) > winner[:score]
//       winner = { word: word, score: score_word(word) }
//     elsif score_word(word) == winner[:score]
//       if ((word.length < winner[:word].length) || (word.length == 10)) && (winner[:word].length != 10)
//         winner = { word: word, score: score_word(word) }
//       end
//     end
//   end
//   return winner
// end

// # Verifies input word is in the English language CSV file
// def is_in_english_dict?(input)
//   dictionary = CSV.read("assets/dictionary-english.csv")
//   valid_word = dictionary.include?(input.downcase) ? true : false
//   return valid_word
// end