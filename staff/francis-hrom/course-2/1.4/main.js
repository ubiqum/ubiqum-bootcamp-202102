// 1.2. JavaScript Basics
// https://ubiqum.socraticarts.com/mc/poa?productID=7185&taskID=3130

console.log("Starting javascript...");

var myName = "Francis";
console.log(myName);

var age = 16;
console.log(age);

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

if (age > 21) {
  console.log("You are older than 21");
} else {
  console.log("You are not older than 21");
}

if (age > ignasiAge) {
  console.log("Ignasi is younger than you");
} else if (age < ignasiAge) {
  console.log("Ignasi is older than you");
} else {
  console.log("You have the same age as Ignasi");
}

// 1.3. JavaScript Array Functions
// https://ubiqum.socraticarts.com/mc/poa?productID=7185&taskID=3130

// Exercise 1:
console.log("------");
var classMates = ["Francis", "Alex", "Max", "Manuel"];
console.log(classMates);
classMates.sort();
console.log(classMates);
console.log(classMates[0]);
console.log(classMates[classMates.length - 1]);

for (var i = 0; i < classMates.length; i++) {
  console.log(classMates[i]);
}

// Exercise 2:
console.log("------");
var classMatesAges = [31, 24, 27, 42];

var i = 0;
while (i < classMatesAges.length) {
  console.log(classMatesAges[i]);
  i++;
}

var i = 0;
while (i < classMatesAges.length) {
  if (classMatesAges[i] % 2 == 0) {
    console.log(classMatesAges[i]);
  }
  i++;
}

for (var i = 0; i < classMatesAges.length; i++) {
  console.log(classMatesAges[i]);
}

for (var i = 0; i < classMatesAges.length; i++) {
  if (classMatesAges[i] % 2 == 0) {
    console.log(classMatesAges[i]);
  }
}

// Exercise 3:

// Using for loop
console.log("------");
var arr = [31, 24, 27, 42];
function lowestNumber(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return console.log(min);
}

lowestNumber(arr);

// Using Math functions
var arr = [31, 24, 27, 42];
function lowestNumber(arr) {
  return console.log(Math.min(...arr));
}

lowestNumber(arr);

// Using Function.prototype.apply() instead of the spread operator
var arr = [31, 24, 27, 42];
function lowestNumber(arr) {
  return console.log(Math.min.apply(null, arr));
}

lowestNumber(arr);

// Exercise 4:
console.log("------");
var arr = [31, 24, 27, 42];
function biggestNumber(arr) {
  return console.log(Math.max.apply(null, arr));
}
biggestNumber(arr);

// Exercise 5:
console.log("------");
var array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
var index = 1;
function valueFromArrayIndex(arr, idx) {
  return console.log(arr[idx]);
}

valueFromArrayIndex(array, index);

// Exercise 6:
console.log("------");

// inefficient approach with multiple loops
var array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
function repeatingValues(arr) {
  var repVals = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        var alreadyInRepVals = false;
        for (var z = 0; z < repVals.length; z++) {
          if (repVals[z] === arr[i]) {
            alreadyInRepVals = true;
          }
        }
        if (alreadyInRepVals === false) {
          repVals[repVals.length] = arr[i];
        }
      }
    }
  }
  return console.log(repVals);
}

repeatingValues(array);

// other solution
var array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
function repeatingValues(input) {
  var duplicates = input.reduce(function (acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
  }, []);
  return console.log(duplicates);
}

repeatingValues(array);

// Exercise 7:
console.log("------");

// with for loop
var myColor = ["Red", "Green", "White", "Black"];

function arrToStr(arr) {
  var str = "";
  for (i = 0; i < arr.length - 1; i++) {
    str += arr[i] + ",";
  }
  str += arr[i];
  return str;
}

console.log(arrToStr(myColor));

// with join()
var myColor = ["Red", "Green", "White", "Black"];

function arrToStr(arr) {
  return arr.join();
}

console.log(arrToStr(myColor));

// with Array.prototype.toString()
var myColor = ["Red", "Green", "White", "Black"];

function arrToStr(arr) {
  return arr.toString();
}

console.log(arrToStr(myColor));

// using concatenation
var myColor = ["Red", "Green", "White", "Black"];

function arrToStr(arr) {
  return (arr = arr + "");
}

console.log(arrToStr(myColor));

// 1.4. JavaScript String Functions
// https://ubiqum.socraticarts.com/mc/poa?productID=7185&taskID=3130

// Exercise 1:
console.log("------");

// with for loop
var x = 32446;
function reverseNumber(num) {
  num = num + "";
  num = num.split("");
  var newNum = "";
  for (var i = num.length - 1; i >= 0; i--) {
    newNum += num[i];
  }
  newNum = parseInt(newNum, 10);
  return newNum;
}

console.log(reverseNumber(x));

// with reverse()
var x = 32446;
function reverseNumber(num) {
  return parseInt(String(num).split("").reverse().join(""), 10);
}

console.log(reverseNumber(x));

// Exercise 2:
console.log("------");

var x = "webmaster";
function orderedString(str) {
  return str.split("").sort().join("");
}

console.log(orderedString(x));

// Exercise 3:
console.log("------");

// with for loop
var x = "prince of persia";

function proper(str) {
  str = str.split(" ");
  var newStr = "";
  for (var i = 0; i < str.length - 1; i++) {
    newStr +=
      str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase() + " ";
  }
  newStr += str[i].charAt(0).toUpperCase() + str[i].substr(1).toLowerCase();
  return newStr;
}

console.log(proper(x));

// with regex
var x = "prince of persia";

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

console.log(x.toProperCase());

// Exercise 4:
console.log("------");

// using for loop
var x = "Web Development Tutorial";

function findLongestWord(str) {
  str = str.split(" ");
  var longestWord = str[0];
  for (var i = 1; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(x));

// using sort()
var x = "Web Development Tutorial";

function findLongestWord(str) {
  var longestWord = str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

console.log(findLongestWord(x));

// using reduce()
var x = "Web Development Tutorial";

function findLongestWord(str) {
  var longestWord = str.split(" ").reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

console.log(findLongestWord(x));
