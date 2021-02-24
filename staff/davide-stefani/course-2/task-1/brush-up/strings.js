/*Exercise 1: Write a JavaScript function that reverses a number. 
For example, if x = 32443 then the output should be 34423.*/

function reversedNumber(num) {
    return (
        num
            .toString()
            .split('')
            .reverse()
            .join('')
    )
};

var num = 34423;

reversedNumber(num);


/*Exercise 2: Write a JavaScript function that returns a string in 
alphabetical order. For example, if x = 'webmaster' then the output should 
be 'abeemrstw'.  Punctuation and numbers aren't passed in the string. */


function alphabeticalOrder(string) {
    return string
        .split('')
        .sort()
        .join('');
};

var string = 'webmaster';

alphabeticalOrder(string);


/*Exercise 3: Write a JavaScript function that converts the first letter of 
every word to uppercase. For example, if x = "prince of persia" then the 
output should be "Prince Of Persia". */

function firstUppercase(string) {
    var arr = string.split(' ');
    var newarray = [];

    for (var x = 0; x < arr.length; x++) {
        newarray.push(arr[x].charAt(0).toUpperCase() + arr[x].slice(1));
    }
    return newarray.join(' ');
}

firstUppercase('prince of persia')


/*Exercise 4: Write a JavaScript function that finds the longest word in a 
phrase. For example, if x = "Web Development Tutorial", then the output 
should be "Development". */

function findLongestWord(string) {
    var strSplit = string.split(' ');
    var longestWord = strSplit[0];
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}

findLongestWord("Web Development Tutorial")