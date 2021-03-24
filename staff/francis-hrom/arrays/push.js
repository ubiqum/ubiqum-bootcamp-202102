// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Array.prototype.newPush = function() {
    for (var i=0; i<arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this;
}