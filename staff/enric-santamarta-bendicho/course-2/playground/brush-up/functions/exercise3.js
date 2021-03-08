debugger
function upperCase(string) {
    var string2 = ''
    /* string = string.toUpperCase() */


    for (var i = 0; i <= string.length; i++) {
        var o = i + 1
        if (i == 0) { string2 = string2 + string[i].toUpperCase() 
        continue;}
        if (string[i] = charCodeAt(32)) { string = string + string[o].toUpperCase() 
        continue;}
        else {string2 = string2 + string[i]
        continue;}
    }
    console.log(string2)
}
upperCase('prince of persia')