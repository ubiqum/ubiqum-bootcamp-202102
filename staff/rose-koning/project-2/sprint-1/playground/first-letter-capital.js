function firstCapital(string){
 var tempArray = string.split(" ");
for(var i=0; i< tempArray.length; i++){
    tempArray[i]= ((tempArray[i].charAt(0))).toUpperCase() +(tempArray[i].slice(1));
}
console.log(tempArray .join(` `));
}
x = "prince of persia";
firstCapital(x);