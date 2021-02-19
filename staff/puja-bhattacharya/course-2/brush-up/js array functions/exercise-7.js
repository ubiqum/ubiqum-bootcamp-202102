console.log("Exercise -7 ..  ");

/* Write a simple JavaScript function to join all elements of the array into a string. 
*/

myColor = ["Red", "Green", "White", "Black"];
console.log("\"" + join_my_colors +("\""));                         //joining the result string
console.log("\"" + myColor.join( "\",\"") + "\"");          //joining the myColor array (without writing function)

function join_my_colors(color)
{
    var a = [" "];var result;

    for(var i =0; i < myColor.length; i++ )
    {
        if (i == 0)
            result = myColor[i];
        else
            result = result + "\",\""+ myColor[i];
    }
    return result;
}

console.log("**********************END of exercise -7**********************");