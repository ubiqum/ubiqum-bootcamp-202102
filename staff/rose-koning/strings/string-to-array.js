function stringToArray(text){
var str = text;
for (var i = 0; i < str.length; i++) {
var endArray = [];
endArray.push(str.charAt(i));
console.log(endArray);
}}

stringToArray("Does this work?");
stringToArray("yes it does!");