console.assert(countWords("    ")==0,'This is wrong result! -> ',countWords("    "));
console.assert(countWords("👋")==1,'This is wrong result! -> ',countWords("👋"));
console.assert(countWords("Hello World")==2,'This is wrong result! -> ',countWords("Hello World"));
console.assert(countWords("I was born from an 🥚")==6,'This is wrong result! -> ',countWords("I was born from an 🥚"));
console.assert(countWords("I saw the light a few days later 🐣")==9,'This is wrong result! -> ',countWords("I saw the light a few days later 🐣"));
console.assert(countWords("I did my first steps as a 🐥")==8,'This is wrong result! -> ',countWords("I did my first steps as a 🐥"));
console.assert(countWords("Then I grew up and I became a 🐓")==9,'This is wrong result! -> ',countWords("Then I grew up and I became a 🐓"));