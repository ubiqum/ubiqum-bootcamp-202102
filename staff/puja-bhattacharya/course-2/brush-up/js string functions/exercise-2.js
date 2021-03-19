console.log("Exercise -2 ..  ");

/* Write a JavaScript function that returns a string in alphabetical order. 
 * For example, if x = 'webmaster' then the output should be 'abeemrstw'.  
 * Punctuation and numbers aren't passed in the string.
*/ 

var str = "webmaster";
console.log(f1(str));

function f1(st)
{
    var arr = st.split("");
    var text = "";
    for (var i = 0; i < arr.length; i++) 
        text += arr[i];
    
    text = text.split('').sort().join('');
    return text;
}


console.log("**********************END of exercise -2**********************");