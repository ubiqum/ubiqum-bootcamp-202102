function alphabetize(x){
    var tempArray = [];
for(var i=0; i<x.length; i++){

tempArray.push(x.charAt(i));
}
tempArray.sort();
var alphabetized =((tempArray.join("")));
console.log(alphabetized);
  
}
x = 'webmaster';

alphabetize(x);