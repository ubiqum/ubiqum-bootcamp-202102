// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

function find(array,fx) {  
    for (var i=0; i<array.length; i++) {
        if (fx(array[i]) === true) {
            return array[i];
        }
    }
    return undefined;
}