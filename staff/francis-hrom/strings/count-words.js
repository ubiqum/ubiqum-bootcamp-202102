// https://pluscoders.com/javascript/strings/challenges/count-words/
function countWords(text) {
    if(text.length == text.split(" ").length-1) {
      return 0;
    } else {
      return text.split(" ").length;
    }
}

/* solution with regex
function countWords(text) {
    var matches = text.match(/\S+/g);
    return matches?matches.length:0;
}
*/

console.log(countWords("    "));
console.log(countWords("👋"));
console.log(countWords("Hello World"));
console.log(countWords("I was born from an 🥚"));
console.log(countWords("I saw the light a few days later 🐣"));
console.log(countWords("I did my first steps as a 🐥"));
console.log(countWords("Then I grew up and I became a 🐓"));
