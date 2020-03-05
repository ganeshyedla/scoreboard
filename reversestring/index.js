// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  return rev;
}

module.exports = reverse;

//return str
// .split("")
// .reverse()
// .join("");

// for (let c of str) {
//     rev = c + rev;
//   }

// for (let i = 0; i < str.length; i++) {
//     rev = str[i] + rev;
//   }
