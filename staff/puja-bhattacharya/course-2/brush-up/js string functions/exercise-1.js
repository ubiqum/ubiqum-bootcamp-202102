console.log("Exercise -1 ..  ");

/* Write a JavaScript function that reverses a number. 
 * For example, if x = 32443 then the output should be 34423.
*/

var mynumber = "32415";
console.log(reverse_num(mynumber));

function reverse_num(num1)
{
    var strng, reverse_string = '';
    for (var i = num1.length-1; i >= 0; i--)
    {
        strng = num1.charAt(i); 
        reverse_string = reverse_string + strng;
    }
    return reverse_string;
}

console.log("**********************END of exercise -1**********************");