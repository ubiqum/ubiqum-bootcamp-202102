function concat() {
    var string = ""

    for (var i = 0; i < arguments.length; i++) {
        string = string + arguments[i]
    }

    return string;
}

concat('this', 'is', 'a', 'test')


