// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.


function pop(array) {
    var lastElement = array[array.length-1];
    array.length = array.length-1;
    return lastElement;
}