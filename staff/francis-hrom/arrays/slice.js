// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

function slice(array,start,end) {  
    var newArr = [];
    var loopStart = start || 0;
    var loopEnd = end+1 || array.length;

    for (var i=loopStart; i<loopEnd; i++) {
            newArr[newArr.length] = array[i];
        }
        
    return newArr;
    }
