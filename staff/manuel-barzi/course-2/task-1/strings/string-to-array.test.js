console.log('TEST stringToArray()')

console.log('CASE should convert "hello" into an array ["h", "e", "l", "l", "o"]')

var text = 'hello'

var result = stringToArray(text)

console.assert(result instanceof Array, 'should result be instance of type Array')
console.assert(result.length === text.length, 'should length in result match the text length')

for (var i = 0; i < result.length; i++)
    console.assert(result[i] === text[i], 'assert value at index ' + i + ' matches the character ' + text[i])
