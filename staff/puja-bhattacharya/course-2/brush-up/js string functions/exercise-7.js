console.log("Exercise -7 (Function that repeats a string a given number of times)..  ");

/* Implement a function named concat that receives one or more texts (string) as parameters.
 * Return them concatenated in one single string.
*/

var str = "Welcome to the world of coding!";
var num = 2;
console.log(repeat(str, num));

function repeat(st, times)
{
    var result = "";
    for (var i = 1; i<= times; i++)
    {
        result += st;
    }
    return result;
}

console.log("**********************END of exercise -7**********************")