console.assert(JSON.stringify(stringToArray("Howdy!"))==JSON.stringify(["H", "o", "w", "d", "y","!"]),'This is wrong result! -> ',stringToArray("Howdy!"));
console.assert(JSON.stringify(stringToArray("Hello World"))==JSON.stringify(["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]),'This is wrong result! -> ',stringToArray("Hello World"));
console.assert(JSON.stringify(stringToArray(""))==JSON.stringify([]),'This is wrong result! -> ',stringToArray(""));
