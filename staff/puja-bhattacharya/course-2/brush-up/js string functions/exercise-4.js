console.log("Exercise -4 ..  ");

/* Write a JavaScript function that finds the longest word in a phrase. 
 * For example, if x = "Web Development Tutorial", then the output should be "Development".
*/

var str = "Web Development Tutorial";
console.log(f1(str));

function f1(st)
{
    var arr = st.split(" ");
    console.log(arr);
    arr.sort();
     
    return arr[0];
}

console.log("**********************END of exercise -4**********************");