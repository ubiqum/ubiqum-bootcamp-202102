console.log("Exercise -2 ..  ");

/* Create an array with all the ages of the students in your class.  
 * Iterate the array using a while loop, and then print every age in the console.  
 * Add a conditional inside the while loop to only print even numbers.  
 * Change the loop to use a "for" loop instead of a "while" loop.
*/

var names = ["Peter", "Adam", "David", "Nils", "Mike", "Ben", "Markus", "Lena"];
var age = ["32", "30", "29", "34", "33", "40", "39", "37"];
var i = 0; var j = 0;
console.log("Printing all the ages using 'While' loop..");
while (i < age.length)
{
    console.log("Age: " + age[i]);
    i++;
}

console.log("Printing all the ages using 'While' loop that are EVEN..")
while (j < age.length)
{
    if ((age[j] % 2) == 0)
        console.log("Even Age: " + age[j]);
    j++;
}

console.log("Printing all the ages using while 'For' that are EVEN..")
for (var i=0; i < age.length; i++)
{
    if ((age[i] % 2) == 0)
        console.log("Even Age: " + age[i]);
}

console.log("**********************END of exercise -2**********************");