// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

function indexOf(array,value) {  
    var index = -1;
    for (var i=0; i<array.length; i++) {
        if (array[i]===value) {
            index = i;
        }
    }
    return index;
}
