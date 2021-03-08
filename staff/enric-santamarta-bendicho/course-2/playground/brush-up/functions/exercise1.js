
var mynumber = "455454"

function reverse(string) {
    var string2 = ""
    for (var i = string.length - 1; i >= 0; i--) {
        string2 = string[i] + string2

    }
    console.log(string2)
}
reverse(mynumber)