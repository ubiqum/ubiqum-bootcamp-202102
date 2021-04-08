// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
function push() {
    for (var i=1; i<arguments.length; i++) {
        var arr = arguments[0];
        arr[arr.length] = arguments[i];
    }
    return arr.length;
}




/* Array.prototype solution with functional dot notation
Array.prototype.newPush = function() {
    for (var i=0; i<arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this;
}

console.assert(JSON.stringify(['pigs', 'goats', 'sheep'].newPush('cows'))==JSON.stringify(['pigs', 'goats', 'sheep', 'cows']),"['pigs', 'goats', 'sheep'].newPush('cows') has wrong result:",['pigs', 'goats', 'sheep'].newPush('cows'),"Expected result:['pigs', 'goats', 'sheep', 'cows']");
console.assert(JSON.stringify(['pigs', 'goats', 'sheep', 'cows'].newPush('chickens','cats','dogs'))==JSON.stringify(['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']),"['pigs', 'goats', 'sheep', 'cows'].newPush('chickens','cats','dogs') has wrong result:",['pigs', 'goats', 'sheep', 'cows'].newPush('chickens','cats','dogs'),"Expected result:['pigs', 'goats', 'sheep', 'cows', 'chickens', 'cats', 'dogs']");
console.assert(JSON.stringify(['Banana', 'Orange', 'Apple', 'Mango'].newPush('Kiwi'))==JSON.stringify(['Banana', 'Orange', 'Apple', 'Mango','Kiwi']),"['Banana', 'Orange', 'Apple', 'Mango'].newPush('Kiwi') has wrong result:",['Banana', 'Orange', 'Apple', 'Mango'].newPush('Kiwi'),"Expected result:['Banana', 'Orange', 'Apple', 'Mango','Kiwi']");

*/