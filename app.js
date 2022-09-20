// Build a program to find the length of the longest word in a string excluding punctuation and removing whitespace.

// const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// function removePunctuation(string) {
//   return string
//     .split("")
//     .filter(function (letter) {
//       return punctuation.indexOf(letter) === -1;
//     })
//     .join("");
// }
// let newString = removePunctuation(myString);
// console.log(newString);

const findLongestWord = (myString) => {
  let stringArray = myString.split(' ')
  let longestWord = 0
  let answer
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWord) {
      longestWord = stringArray[i].length
      answer = stringArray[i]
    }
  }
  return [answer, longestWord]
}
console.log(findLongestWord("This is for your own personal journey. May you have excellent navigation as a developer using your own compass."))

// const isUnique = (word) => {
//     // console.log(`Original word: ${word}`)
//     word = word.split('')
//     // console.log(`Word array: ${word}`)
//     let setWord = new Set(word)
//     if (word.length === setWord.size) {
//         console.log('true')
//         return true
//     } else {
//         console.log('false')
//         return false
//     }
// }

// isUnique('egg') // --> false
// isUnique('Artemis') // --> true


// const isUnique = (word) => {
//     let wordArr = word.split("");
//     for (let i = 0; i < wordArr.length; i++) {
//       let firstLetter = wordArr.shift();
//       // console.log(firstLetter);
//       for (let i = 0; i < wordArr.length; i++) {
//         const comparedLetter = wordArr[i];
//         // console.log(comparedLetter);
//         if (firstLetter === comparedLetter) {
//           console.log(`The first letter: ${firstLetter}`);
//           console.log(`The compared letter: ${firstLetter}`);
//           console.log(true);
//         } else {
//           console.log(false);
//         }
//       }
//     }
//   };
  
//   isUnique("egg");
//   isUnique("Artemis");