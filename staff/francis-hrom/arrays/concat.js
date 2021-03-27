// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Return value: The reversed array.


function concat() {
    var arr = [];
    for (var i=0; i<arguments.length; i++) {
        for (var j=0; j<arguments[i].length; j++) {
            arr[arr.length]=arguments[i][j];
        }
    }
    return arr;
}
