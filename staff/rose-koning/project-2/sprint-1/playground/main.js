console.log("starting javascript...")

var myName ="Rose Koning";
var age=(40);
var ignasiAge=(32);
var ageDif=(ignasiAge-age);
console.log(myName);
console.log(age);
console.log(ageDif);

if(age >=21){
    console.log("you are older than 21");
}
else{
    console.log("you are under 21");
}

if(ignasiAge>age){
    console.log("ignasi is " + ageDif + " years older than you");
}
else if(ignasiAge==age){
    console.log(" you and ignasi have the same age");
}
else{
    console.log("you are " + ageDif + " years older than ignasi")
}
