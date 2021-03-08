var myColor = ["Red", "Green", "White", "Black"];

function joinAllElements(elements) {
    var string = "";
    string = elements.join("\", \"")
     string="\""+string + "\""
    console.log(string)
}
