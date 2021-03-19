console.log("Exercise -5 (Function that spells a text.) ..  ");

/* Implement a function named spell that receives a text (string) as a parameter.
 * Print each character from that text to the console.
*/

var str = "Welcome to the world of coding!";
console.log(spell(str));

function spell(st)
{
    var arr = st.split("");
    var text = "";
    for (var i = 0; i < arr.length; i++) 
        text += arr[i] + "\r\n";
    
    return text;
}

console.log("**********************END of exercise -5**********************");