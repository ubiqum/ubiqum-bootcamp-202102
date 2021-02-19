console.log("Exercise -5 ...  ");

/* Write a conditional that compares your age with Ignasi's age. 
 * This conditional will need to test if you are older, younger, or the same age, and print, appropriately, 
 * either "Ignasi is older than you", Ignasi is younger than you", or "You have the same age as Ignasi". 
*/

myName = "Puja Bhattacharya";
console.log(myName);

age = 33;
console.log(age);

ignasiAge = 32;
ageDiff = age - ignasiAge;
console.log(ageDiff);


function age_result(my_age, ignasi_age)
{
if(my_age < ignasi_age)
{   return "Ignasi is older than you";
}
else if (my_age > ignasi_age)
{   return "Ignasi is younger than you";
}
else
{   return "You have the same age as Ignasi"
}
}
console.log(age_result(age, ignasiAge));

console.log("**********************END of exercise -5**********************");
