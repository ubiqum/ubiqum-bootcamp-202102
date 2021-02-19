console.log("Exercise -1 ...  ");

/* Create an array with all the names of your class (including mentors).  
 * Sort the array alphabetically.  Print the first element of the array in the console.  
 * Print the last element of the array in the console.  Print all the elements of the array in the console.  
 * Use a "for" loop. 
*/

var names = ["Manuel", "Peter", "Sebastien", "Adam", "David", "Nils", "Mike", "Ben", "Markus", "Lena"];
console.log("The unsorted elements are: "+ names);

var sorted_names = names.sort();
console.log("The Sorted elements are: "+ sorted_names);

for(i = 0; i < sorted_names.length; i++)
{
    if (i == 0)
        console.log("The 1st name is: " + sorted_names[i]);
    console.log("Printing all the names while looping: " + sorted_names[i]);
    if(i == sorted_names.length-1)
        console.log("The last name is: " + sorted_names[i]);

}

console.log("**********************END of exercise -1**********************");