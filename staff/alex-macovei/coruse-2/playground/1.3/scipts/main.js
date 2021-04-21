 console.log("Starting javascript...");
var ages = [27,29,22,24];
var b = 0;
var simpleArray = [22,45,74,23,12,99,81,45,21,22];
var names = ["Sebastian","Francis","Max","Alex"];

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

function lowestNumber (array){
   var num = array[0];
   for(var i=0;i<array.length;i++){
      if(num>array[i]){
         num = array[i];
      }
   }
   return num;
}

console.log(lowestNumber(simpleArray));

function biggestNumber (array){
   var num = array[0];
   for(var i=0;i<array.length;i++){
      if(num<array[i]){
         num = array[i];
      }
   }
   return num;
}

console.log(biggestNumber(simpleArray));

function printIndex (array, index){
   return array[index];
}

console.log(printIndex(simpleArray,3));

function doubles(array){
   for(var i=0;i<array.length;i++){
      for(var b=0;b<array.length;b++){
         if (array[i]==array[i]){
            return array[i];
         }
      }
   }
}

console.log(doubles(simpleArray));