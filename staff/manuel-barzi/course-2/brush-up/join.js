/**
 * Joins all text elements in an array into a single string
 *
 * @param {array} strings The strings to join.
 *
 * @return {string} The string with all elements joined
 */
function join(strings) {
    //return 'Red,Green,White,Black'

    var result = ''

    for (var i = 0; i < strings.length; i++) {
        result = result + strings[i]

        if (i < strings.length - 1)
            result = result + ','
    }

    return result
}

//debugger

// TEST CASE should succeed joining strings with colors in an array

var colors = ["Red", "Green", "White", "Black"]

var result = join(colors)

console.assert(result === 'Red,Green,White,Black', 'should all colors be joined and comma-separated')

// TEST CASE should succeed joining strings with names in an array

var colors = ["Rose", "Gerard", "Whitney", "Beck"]

var result = join(colors)

console.assert(result === 'Rose,Gerard,Whitney,Beck', 'should all names be joined and comma-separated')