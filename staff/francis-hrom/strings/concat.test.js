console.assert(concat("", "")=='','This is wrong result! -> ',concat("", ""));
console.assert(concat("👋", "😊", "🤙")=='👋😊🤙','This is wrong result! -> ',concat("👋", "😊", "🤙"));
console.assert(concat("Hello", ",", " ", "World", "!")=='Hello, World!','This is wrong result! -> ',concat("Hello", ",", " ", "World", "!"));
console.assert(concat(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)=='012345678910','This is wrong result! -> ',concat(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.assert(concat("no much to concat here")=='no much to concat here','This is wrong result! -> ',concat("no much to concat here"));
console.assert(concat(" ", " ")=='  ','This is wrong result! -> ',concat(" ", " "));