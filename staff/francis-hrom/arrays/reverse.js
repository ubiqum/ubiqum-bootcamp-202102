// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// Return value: The reversed array.


function reverse(array) {
    var newArr = [];
    for (var i=array.length-1; i>-1; i--){
        newArr[newArr.length] = array[i];
    }
    return newArr;
}
