// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let words = [];
  for (let wo of str.split(" ")) {
    let word = "";

    for (let i = 0; i < wo.length; i++) {
      if (i === 0) {
        word = word + wo[0].toUpperCase();
      } else {
        word = word + wo[i];
      }
    }
    words.push(word);
  }
  return words.join(" ");
}

module.exports = capitalize;

//own

//SLICE
// let words = [];
// let sp = str.split(" ");
// for (let word of sp) {
//   words.push(word[0].toUpperCase() + word.slice(1));
// }
// return words.join(" ");

// if (a === 0) {
//     // news = news + i[a].toUpperCase();
//     //   i[a] = i[a].replace(i[a]).toUpperCase();
//     inword = inword + i[a].toUpperCase();
//   }
//   if (a === i.length - 1) {
//     inword = inword + i[a];
//     words.push(inword);
//   } else {
//     inword = inword + i[a];
//   }
