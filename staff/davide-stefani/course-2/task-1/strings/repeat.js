function repeat(text, num) {
    var repeating = '';

    while (num > 0) {
        repeating = repeating + text;

        num = num - 1;
    }

    return repeating;
}

repeat('abc', 3)

repeat('test', 6)