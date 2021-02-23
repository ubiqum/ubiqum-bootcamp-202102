console.log('TEST Horroy.prototype.join()')

console.log('CASE should concatenate all items with commas when no separator is provided')

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join()

console.assert(joined === "a,2,true,[object Object],1,2,3,function() {},7", 'should return a string with elements joined by comma')

console.log('CASE should concatenate all items with no spaces when empty separator is provided')

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join('')

console.assert(joined === "a2true[object Object]1,2,3function() {}7", 'should return a string with elements joined by comma')

console.log('CASE should concatenate all items with dash when this symbol is provided')

var h = new Horroy('a', 2, true, { hello: 'world' }, [1, 2, 3], function() {}, 7)

var joined = h.join('-')

console.assert(joined === "a-2-true-[object Object]-1,2,3-function() {}-7", 'should return a string with elements joined by comma')