// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filter(array,fx) {  
    var newArr = [];

    for (var i=0; i<array.length; i++) {
        if (fx(array[i]) === true) {
            newArr[newArr.length] = array[i];
        }
    }

    return newArr;
}