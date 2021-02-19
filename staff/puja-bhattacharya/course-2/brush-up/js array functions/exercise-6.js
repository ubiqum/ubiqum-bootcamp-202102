console.log("Exercise -6 ..  ");

/* Write a function which receives an array and only prints the values that repeat.  
 * For example, for var array = [6,3,6,23,11,100,1,33,45,28,33,23,100]; , the function will print '6,23,33,100'
*/

myarray = [32, 30, 29, 34, 33, 40, 32, 34];
sorted_arr = myarray.sort();
//console.log(sorted_arr);
console.log(find_duplicates(sorted_arr));

function find_duplicates(s_arr)
{
    var results = [];
    for (var i = 0; i < (s_arr.length-1); i ++) 
        {
            if (s_arr[i] == s_arr[i+1]) 
                results.push(s_arr[i]);
        }
        return results;
}

console.log("**********************END of exercise -6**********************");