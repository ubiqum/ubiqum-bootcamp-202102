//exercise1:

var classmates = ['Rose', 'Puja', 'Enric', 'Luca', 'Davide', 'Manuel'];
classmates.sort();
console.log(classmates[0]);
console.log(classmates[5]);
for (i = 0; i < classmates.length; i++) {
    console.log(classmates[i]);
};
//exercise2:

var ages = [34, 30, 37, 29, 31, 25];
while (ages.length > 0) {
    console.log(ages.join(',')); ages = ages - 1;
};

//exercise3:

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

// exercise4

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

// exercise5

debugger

function indexPosition(arr,index){
        return arr[index];
      };
var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

indexPosition(arr,7);


//exercise6

function findDuplicates(){

    for(let i=0; i<numbers.length; i++){

        for( j=i; j<numbers.length ; j++){
            var currentNumber = numbers[i];
            var doubleNumber = numbers[(j+1)];
        if (currentNumber=== doubleNumber){
            console.log(currentNumber);
            
        }
        }
       }

        }
    var numbers = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 

    findDuplicates(numbers); 
