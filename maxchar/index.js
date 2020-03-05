// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = chars(str);
  let maxreChar = "";
  let maxrep = 0;
  for (let char in map) {
    if (map[char] > maxrep) {
      maxrep = map[char];
      maxreChar = char;
    }
  }
  return maxreChar;
}

function chars(s) {
  let charMap = {};
  for (let char of s) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  return charMap;
}

module.exports = maxChar;
