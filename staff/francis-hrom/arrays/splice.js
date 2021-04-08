// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// Return value: An array containing the deleted elements.

function splice(array,start,howMany) {  
    var newArr = [];

    for (var i=0; i<array.length; i++) {
        if (i == start) {
            for (var j=3; j < arguments.length; j++) {
                newArr[newArr.length] = arguments[j];                
            }
            i+= howMany;
        } 
        newArr[newArr.length] = array[i];
    }
        
    array = newArr;         
    return array;
}