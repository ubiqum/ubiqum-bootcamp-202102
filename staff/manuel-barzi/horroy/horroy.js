function Horroy() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

Horroy.prototype.push = function() {    
    //debugger
    for (var i = 0; i < arguments.length; i++)
        this[this.length++] = arguments[i]

    return this.length
}