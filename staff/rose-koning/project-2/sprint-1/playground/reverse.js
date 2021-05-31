function reverse(x){
for(var i=0; i< x.length; i++){
    var temp = (x.charAt(i));
    if(i===0){
    var reversed = temp;}
    else{
    var reversed = temp + reversed;
    }
  

}
console.log(reversed);
}
var x = "2482934";

reverse(x);