// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

function map(array,fx) {  
    for (var i=0; i<array.length; i++) {
        array[i] = fx(array[i]);
    }
    return array;
}