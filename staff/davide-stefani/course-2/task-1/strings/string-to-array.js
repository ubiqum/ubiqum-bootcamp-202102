function stringToArray(text) {
    return text.split('')
}

stringToArray('Testing')

stringToArray('Trying with spaces')

function stringToArray(text) {
    var array = []

    for (var i = 0; i < text.length; i++)
        array[i] = text[i]

    return array
}

stringToArray('Testing')

stringToArray('Trying with spaces')