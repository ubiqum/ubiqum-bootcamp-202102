console.log("Exercise -9 (Various string operations and functions)..  ");

/* JavaScript String Exercises for Practice.
*/

// 1. Example to return the character at the specified index in a string..

var str = "Javascript";
var res = str.charAt(str.length-1);
console.log(res);

// 2. Example to return the unicode character at the specified index in a string..

var str = "Javascript";
var res = str.charCodeAt(str.length-1);
console.log(res);

// 3. Example to join 3 strings into a single string..

var str1 = "Welcome ";
var str2 = "To";
var str3 = " Javascript Programming!";
var res = str1.concat(str2, str3);
console.log(res);

// 4. Example to check if a string ends with ""..

var str = "Hello, welcome to Javascript programming.";
var n = str.endsWith("programming.");
console.log(n);

// 5. Example to return the string value of the unicode character passed..

var res = String.fromCharCode(72, 69, 76, 76, 79);
console.log(res);

// 6. Example to check if a string includes "world"..

var str = "Hello, welcome to the world of programming.";
var n = str.includes("world");
console.log(n);

// 7. Example to find the first occurrence of the letter "m" in a string, starting the search at position 5..

var str = "Hello, welcome to the world of programming.";
var n = str.indexOf("m", 5);
console.log(n);

// 8. Example to find a string for the last occurrence of "planet", starting the search at position 20..

var str ="This is 'Perseverance' saying 'Hello' to planet Earth from planet Mars";
var n= str.lastIndexOf("planet", 52);
console.log(n);

// 9. Example to compare two strings in the current locale..

var str1 = "ab";
var str2 = "cd";
var n = str1.localeCompare(str2);
console.log(n);

// 10. Example to perform a global, case-insensitive search for "ain"..

var str = "The rain in SPAIN stays mainly in the plain";
var res = str.match(/ain/gi);                               // gi modifier to make a case sensitive search
console.log(res);

// 11. Example to make a new string by copying a string twice..

var str = "Hello world!";
var res = str.repeat(2);
console.log(res);

// 12. Example to perform a global, case-insensitive replacement..

var str = "Welcome to the world of coding. Coding is my new life now!";
var res = str.replace(/coding/g, "programming");            // g modifier to make case insensitive search
console.log(res);

// 13. Example to perform a case-insensitive search..

var str = "Planet earth is warmer than planet mars";
var n = str.search(/planet/i);
console.log(n);

// 14. Example to slice and extract only the last character..

var str = "Welcome to the world of coding!";
var res = str.slice(-1);
console.log(res);

// 15. Example to split a string with respect to a particular character..

var str = "How are you doing today?";
var res = str.split("o");                                   // splitting and forming arrays of the resultant string ommiting "o"
console.log(res);

// 16. Example to check if a string starts with "world", starting the search at position 15..

var str = "Welcome to the world of coding!";
var res = str.startsWith("world", 15);
console.log(res);

// 17. Example to extract a part of the string..

var str = "Welcome to the world of coding!";
var res = str.substr(3, 4);
console.log(res);

// 18. Example to extract a new string..

var str = "Welcome to the world of coding!";
var res = str.substring(str.length - 1, 15);
console.log(res);

// 19. Example to convert string to lower case of the current locale..

var str = "WELCOME TO THE WORLD OF CODING!";
var res = str.toLocaleLowerCase();
console.log(res);

// 20. Example to convert string to UPPER case of the current locale..

var str = "welcome to the world of coding!";
var res = str.toLocaleUpperCase();
console.log(res);

// 21. Example to convert string to lower case..

var str = "WELCOME TO THE WORLD OF CODING!";
var res = str.toLowerCase();
console.log(res);

// 22. Example to convert string to UPPER case..

var str = "welcome to the world of coding!";
var res = str.toUpperCase();
console.log(res);

// 23. Example to return the value of a String object..

var array_str = ["Let's convert to string!"];
var res = array_str.toString();
console.log(res);

// 24. Example to remove whitespace from both sides of a string..

var str = "       Let's remove all the unwanted white spaces!        ";
var res = str.trim();
console.log(res);

// 25. Example to return the primitive value of a string object..

var str = "See you later";
var res = str.valueOf();
console.log(res);



console.log("**********************END of exercise -9**********************");