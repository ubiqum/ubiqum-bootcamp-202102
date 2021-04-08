// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// Return value: The single value that results from the reduction.

function reduce(array,callback) {  
    var accumulator = 0;
    
    for (var i=0; i<array.length; i++) {
        accumulator += callback(array[i]);
    }

    return accumulator;
}