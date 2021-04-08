// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.


function includes(array,value) {  
    var found = false;
    for (var i=0; i<array.length; i++) {
        if (array[i]===value) {
            found = true;
        }
    }
    return found;
}