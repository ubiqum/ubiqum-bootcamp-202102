console.log("Exercise -8 (Function that concatenates texts)..  ");

/* Implement a function named concat that receives one or more texts (string) as parameters.
 * Return them concatenated in one single string.
*/

var str1 = "Red";
var str2 = "Green";
var str3 = "White";
var str4 = "Black";

console.log(concat(str1, str2, str3, str4));

function concat(st1, st2, st3, st4)
{
    var result = "";
    for (var i = 0; i< arguments.length; i++)
    {
        result =  result.concat(arguments[i]);
    }
    return " \"" + result + "\" ";
}

console.log("**********************END of exercise -8**********************");