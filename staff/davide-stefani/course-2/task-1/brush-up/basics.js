/*Exercise 1: In your JavaScript file create a variable called myName with 
your name as the value. Put your name inside string quotes, e.g., "my name".
 Then add a line of code to print the variable name to the console after the 
 previous message.*/

var myName = 'davide';
console.log(myName);


/*Exercise 2: Create a variable called age with a number that is your age. 
Do not use string quotes for numbers.
Add a line to print that variable in the console. Save the file and reload 
the page. You should see your name, and your age.*/

var age = 34;
console.log(age);


/*Exercise 3: Create a variable called ignasiAge with a value 32. Create 
another variable called ageDiff and set it to an expression that calculates 
your age minus Ignasi's age.  Print the value of ageDiff. */

var ignasiAge = 32;
var ageDiff = age - ignasiAge;
console.log(ageDiff);

/*Exercise 4: Write a conditional that compares the variable with your age 
with the number 21. It should print either "You are older than 21" 
or "You are not older than 21", appropriately, depending on your age. */

if (age > 21) { console.log("You are older than 21") }
else { console.log("You are not older than 21") }

/*Exercise 5: Write a conditional that compares your age with Ignasi's age. 
This conditional will need to test if you are older, younger, or the same age,
 and print, appropriately, either "Ignasi is older than you", 
 Ignasi is younger than you", or "You have the same age as Ignasi".*/

if (age > 21) {
    console.log("you are older then 21");
} else {
    console.log("you are not older then 21");
};
