console.log("Exercise -3 ..  ");

/* Write a JavaScript function that converts the first letter of every word to uppercase. 
 * For example, if x = "prince of persia" then the output should be "Prince Of Persia".
*/ 

var str = "prince of persia";
console.log(f1(str));

function f1(st)
{
    var arr = st.split(" ");
    console.log(arr);
    var text = "";
    for (var i = 0; i < arr.length; i++) 
        text = text + arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    return text;
}

console.log("**********************END of exercise -3**********************");