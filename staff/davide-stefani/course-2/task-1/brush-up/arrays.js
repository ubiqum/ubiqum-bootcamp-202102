/*Exercise 1: Create an array with all the names of your class 
(including mentors).  Sort the array alphabetically.  Print the first element 
of the array in the console.  Print the last element of the array in the 
console.  Print all the elements of the array in the console.  
Use a "for" loop.*/

var classmates = [Manuel, Puja, Rose, Enric, Luca, Davide];
classmates.sort();
console.log(classmates[0]);
console.log(classmates[5]);
for (var i = 0; i < classmates.length; i++) {
    console.log(classmates[i]);
}


/*Exercise 2: Create an array with all the ages of the students 
in your class.  Iterate the array using a while loop, and then print every 
age in the console.  Add a conditional inside the while loop to only print 
even numbers.  Change the loop to use a "for" loop instead of a "while" loop.*/


var studentsAges = [23, 45, 62, 12, 32];
var evenAges = [];

for (var i = 0; i < studentsAges.length; i++) {
    if (studentsAges[i] % 2 === 0) {
        evenAges.push(studentsAges[i]);
    }
    console.log(evenAges)
};

/*Exercise 3: Write a function which receives an array as a parameter and prints the 
lowest number in the array to the console.*/

debugger
function lowestNumber() {
    var lowest = (list[0]);
    for (i = 0; i < list.length; i++) {
        var number = (list[i]);
        if (number < lowest) {
            lowest = number;
        }
    } return lowest;
};
var list = [124, 50, 23, 97, 19, 10, 17, 5, 2];

lowestNumber(list);

/*Exercise 4: Write a function which receives an array as a parameter and prints 
the biggest number in the array to the console.*/

debugger
function biggestNumber() {
    var biggest = (list[0]);
    for (i = 0; i < list.length; i++) {
        var number = (list[i]);
        if (number > biggest) {
            biggest = number;
        }
    } return biggest;
};
var list = [11, 65, 23, 69, 18, 74, 92, 125, 678, 1, 1628];

biggestNumber(list);

/*Exercise 5: Write a function which receives two parameters, an array and an index.  
The function will print the value of the element at the given position 
(one-based) to the console.*/

debugger

function indexPosition(arr, index) {
    return arr[index];
};
var arr = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

indexPosition(arr, 7);


/*Exercise6: Write a function which receives an array and only 
prints the values that repeat.*/

var arr = [1, 3, 6, 8, 1, 6, 23, 4, 23];

function findDuplicates() {
    var duplicates = [];
    var tempArr = arr.sort();

    for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i + 1] === tempArr[i])
            duplicates.push(tempArr[i])
    }

    return duplicates;

}

findDuplicates();

/*Exercise 7: Write a simple JavaScript function to join all elements 
of the following array into a string.*/

myColor = ["Red", "Green", "White", "Black"];

function arrayToString(array) {
    return array.join(' ');
}
arrayToString(myColor);

