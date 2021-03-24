console.assert(JSON.stringify(split("Hello World", "ll"))==JSON.stringify(["He","o World"]),'This is wrong result! -> ',split("Hello World", " "));
console.assert(JSON.stringify(split("Hello World", " "))==JSON.stringify(["Hello", "World"]),'This is wrong result! -> ',split("Hello World", " "));
console.assert(JSON.stringify(split("hola mundo", "a"))==JSON.stringify(["hol", " mundo"]),'This is wrong result! -> ',split("hola mundo", "a"));
console.assert(JSON.stringify(split("hola mundo", "o"))==JSON.stringify(["h", "la mund", ""]),'This is wrong result! -> ',split("hola mundo", "o"));
