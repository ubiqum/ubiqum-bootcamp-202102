
function Case(string) {
    var string2 = ''

    for (var i = 0; i < string.length; i++) {
        var o = i - 1
        if (i == 0) {
            string2 = string2 + string[i].toUpperCase()
            continue;
        }
        if (string[o] == ' ') {
            string2 = string2 + string[i].toUpperCase()
            continue;
        }
        else {
            string2 = string2 + string[i]
            continue;
        }
    }
    console.log(string2)
}
Case('prince of persia')