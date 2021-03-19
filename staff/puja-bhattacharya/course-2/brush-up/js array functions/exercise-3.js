console.log("Exercise -3 ..  ");

/* Write a function which receives an array as a parameter.
 * Print the lowest number in the array to the console. 
*/

myarray = [32, 30, 29, 34, 33, 40, 39, 37];
console.log(find_lowest_num(myarray));

function find_lowest_num(arr)
{
    var done = true; 
    for(var k = 1; k< arr.length; k++)
    {
        for (var i = 1; i < arr.length; i ++) 
        {
            if (arr[i - 1] > arr[i]) 
            {
                done = false;
                var tmp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }
    return arr [0];
}

console.log("**********************END of exercise -3**********************");