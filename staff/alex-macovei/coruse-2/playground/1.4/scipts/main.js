var normalString = "123456789"
var normalString1 = "Macovei"
var normalString2 = "hi";

function reverseString(string){ //Task 1, takes string and reverses it
   var returnString = "";
   for(var i=0;i<string.length+1;i++){
      returnString = returnString+string.charAt([string.length-i]);
   }
   return returnString;
}

console.log(reverseString(normalString));

function order(string){    //Task 2, takes string and sorts the letter in alphabetical order 
   string = string.toLowerCase();
   var length = string.length;
   var array = [];
   var returnString="";
   for(var b=0;b<length;b++){
      array[b]=string[b];
   }
   array.sort();
   for(var b=0;b<length;b++){
      returnString = returnString+array[b];
   }
   return returnString;

}
console.log(order(normalString1));

function upperCase(string){      //Task 3, takes a string and transforms the first letter after each space into uppercase
   var length = string.length;
   string = string[0].toUpperCase()+string.substring(1);
   for(var b=0;b<length-2;b++){
      if(string[b]==" "){
         string = string.substring(b+1,0)+string[b+1].toUpperCase()+string.substring(b+2);
      }  
   }
   return string;
}

console.log(upperCase(normalString2));

function longestWord(string){    //Task 4, takes a string, adds some spaces, and finds the biggest word inside the string
   string = " "+string+"  ";
   var length=0;
   var returnString = "";
   var maxLength = 0;
   for(var b=0;b<string.length-1;b++){
      length++;
      if(string[b]==" "){
         if(maxLength<length){
            returnString = string.substring(b-length+1,b);
            maxLength=length-1;  
         }
         length=0;
      }
   }
   return returnString;
}

console.log(longestWord(normalString2));
