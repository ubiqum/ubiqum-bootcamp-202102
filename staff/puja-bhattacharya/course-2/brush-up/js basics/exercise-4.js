console.log("Exercise -4 ...  ");

/* Write a conditional that compares the variable with your age with the number 21. 
 * It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age.
*/

myName = "Puja Bhattacharya";
console.log(myName);

age = 33;
console.log(age);

ignasiAge = 32;
ageDiff = age - ignasiAge;
console.log(ageDiff);

function age_result(my_age)
{
if(my_age > 21)
{   return "You are older than 21";
}
else if (my_age < 21)
{   return "You are not older than 21";
}
else
{   return "You are exactly 21";
}
}
console.log(age_result(age));

console.log("**********************END of exercise -4**********************");
