console.log("Exercise -6 (Function that converts a string to an array)..  ");

/* Implement a function named stringToArray that receives a text (string) as a parameter.
 * Return an array with all the characters from that text (each one occupying one position
 * of the array in the same order than the original text).
*/

var str = "Welcome to the world of coding!";
console.log(stringToArray(str));

function stringToArray(st)
{
    var arr = st.split("");
  
    return arr;
}

console.log("**********************END of exercise -6**********************");