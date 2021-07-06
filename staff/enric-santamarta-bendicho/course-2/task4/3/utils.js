function average(numbers) {
    var result = 0

    if (numbers.length > 0) {
        for (var i = 0; i < numbers.length; i++)
            result += numbers[i]


        result = result / numbers.length
    }

    return result
}

function tenPercent(array) {
    var tenPercent = array.length * 0.1
    return tenPercent
}
