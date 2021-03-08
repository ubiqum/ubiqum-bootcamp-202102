function alphabeticalOrder(string) {
    var tidyString = ''

    var array = []
    for (var i = 0; i <= string.length; i++) { array.push(string[i]) }
    array.sort()

    tidyString = array.join("")
    console.log(tidyString)
}
alphabeticalOrder('webmaster')