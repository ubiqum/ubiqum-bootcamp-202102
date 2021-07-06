 console.log("Starting javascript...");
var ages = [27,29,22,24];
var b = 0;
var simpleArray = [22,45,74,23,12,99,81,45,21,22,99,12];
var names = ["Sebastian","Francis","Max","Alex"];
var stringArray = ["hello","my","name", "is","Alex"]


names.sort();
console.log(names[0]);
console.log(names[names.length-1]);
for(var i= 0;i<names.length;i++){
   console.log(names[i]);
}

while (b<ages.length){
   console.log(ages[b]);
   b++;
}

for (var i=0;i<ages.length;i++){
   if (ages[i]%2 == 0){
      console.log(ages[i])
   }
}

function lowestNumber (array){ //task 3 prints the lowest number in the specified array
   var num = array[0];
   for(var i=0;i<array.length;i++){
      if(num>array[i]){
         num = array[i];
      }
   }
   return num;
}

console.log(lowestNumber(simpleArray));

function biggestNumber (array){ //task 4 prints the biggest number in the array specified
   var num = array[0];
   for(var i=0;i<array.length;i++){
      if(num<array[i]){
         num = array[i];
      }
   }
   return num;
}

console.log(biggestNumber(simpleArray));

function printIndex (array, index){ //task 5, checking array and returning the specified number position from the array
   return array[index];
}

console.log(printIndex(simpleArray,3));

function doubles(array){ //Task 6, checking array and returning doubles in the array
   var returnArray = [];
   var c = 0;
   for(var i=0;i<array.length;i++){
      for(var b=0;b<array.length;b++){
         if(b!=i && array[i]==array[b] && !returnArray.includes(array[i])){
            returnArray[c] = array[i];
            c++;
         }
      }
   }
   return returnArray;
}

console.log(doubles(simpleArray));

function combine(array) { //Task 7, takes array and transforms it into a string with quotes and spaces in between
   var returnString = "";
   for (var i=0;i<array.length;i++){
      returnString = returnString+"\""+array[i]+"\" ";
   }
   return returnString;
}

console.log(combine(stringArray))