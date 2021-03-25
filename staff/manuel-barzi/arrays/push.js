function push() {
    var array = arguments[0]

    for (var i = 1; i < arguments.length; i++)
        array[array.length] = arguments[i]

    return array.length
}