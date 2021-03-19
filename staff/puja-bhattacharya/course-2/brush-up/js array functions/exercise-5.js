console.log("Exercise -5 ..  ");

/* Write a function which receives two parameters, an array and an index.  
 * The function will print the value of the element at the given position (one-based) to the console.
*/

myarray = [32, 30, 29, 34, 33, 40, 39, 37];
index = 4;
console.log(find_num(myarray, index));

function find_num(arr, ind)
{
    var number = 0;
    for (var i=0; i < arr.length-1; i++)
    {
        if (i == ind)
            number = arr[i];
    }
    return number;
}

console.log("**********************END of exercise -5**********************");