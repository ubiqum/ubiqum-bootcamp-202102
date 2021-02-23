function Horroy() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i]

    this.length = arguments.length
}

Horroy.prototype.join = function(separator) {
    var result = ''

    if (separator === undefined) separator = ','
        

    for (var i = 0; i < this.length; i++) {
        result += this[i]

        if (i < this.length - 1)
            result += separator
    }
       
    return result     
}

Horroy.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

// TEST CASE should concatenate all items with commas when no separator is provided

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join()

console.assert(joined === "a,2,true,[object Object],1,2,3,function() {},7", 'should return a string with elements joined by comma')

// TEST CASE should concatenate all items with no spaces when empty separator is provided

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join('')

console.assert(joined === "a2true[object Object]1,2,3function() {}7", 'should return a string with elements joined by comma')

// TEST CASE should concatenate all items with dash when this symbol is provided

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join('-')

console.assert(joined === "a-2-true-[object Object]-1,2,3-function() {}-7", 'should return a string with elements joined by comma')

// TEST CASE should iterate all items with for each and multiply them by 10

var h = new Horroy(1, 2, 3, 4, 5, 6)

var copy = []
for (var i = 0; i < h.length; i++)
    copy[i] = h[i]

h.forEach(function(value, index) {
    h[index] = value * 10
})

for (var i = 0; i < h.length; i++)
    console.assert(h[i] === copy[i] * 10, 'should value at index ' + i + ' be the initial value ' + copy[i] + ' multiplied by 10') 

