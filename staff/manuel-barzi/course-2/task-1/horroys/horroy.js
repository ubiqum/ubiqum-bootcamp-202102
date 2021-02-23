function Horroy() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

Horroy.prototype.join = function(separator) {
    var result = ''

    if (separator === undefined) separator = ','
        

    for (var i = 0; i < this.length; i++) {
        result += this[i]

        if (i < this.length - 1)
            result += separator
    }
       
    return result     
}

Horroy.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

// TODO includes, map, find, filter, some, every, reduce, slice, splice