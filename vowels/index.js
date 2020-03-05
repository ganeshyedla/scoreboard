// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let vow = 0;
  let small = ["a", "e", "i", "o", "u"];
  let big = ["A", "E", "I", "O", "U"];
  for (let c of str) {
    if (small.includes(c) || big.includes(c)) {
      vow++;
    }
  }
  return vow;
}

module.exports = vowels;
