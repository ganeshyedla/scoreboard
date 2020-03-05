// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let aChar = map(stringA);
  let bchar = map(stringB);

  if (Object.keys(aChar).length !== Object.keys(bchar).length) {
    return false;
  }

  for (let c in aChar) {
    if (aChar[c] !== bchar[c]) {
      return false;
    }
  }
  return true;
}

function map(str) {
  let charMap = {};
  for (let i of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (!charMap[i]) {
      charMap[i] = 1;
    } else {
      charMap[i]++;
    }
  }
  return charMap;
}

module.exports = anagrams;

// let a = stringA
// .split("")
// .sort()
// .join("");
// let b = stringB
// .split("")
// .sort()
// .join("");
// return a === b;
