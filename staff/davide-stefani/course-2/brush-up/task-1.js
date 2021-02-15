var myName = 'Davide'
console.log(myName);
var age = 34
console.log(age);
var ignasiAge = 32
var ageDiff = age-ignasiAge
console.log(ageDiff);
if (age>21){
    console.log("you are older then 21"); 
} else {
    console.log("you are not older then 21");
};
if(age<ignasiAge){
    console.log("Ignasi is older then you");
} else if (age>ignasiAge){
    console.log("Ignasi is younger then you");
} else {(age==ignasiAge)
    console.log("You have the same age as Ignasi");
}
var course = ["Rose","Puja","Davide","Enric","Luca","Manuel"];
course.sort();
console.log(course[0]);
console.log(course[5]);
console.log (course);

for(var i=0; i<course.length; i++) {
console.log(course[i]);
}