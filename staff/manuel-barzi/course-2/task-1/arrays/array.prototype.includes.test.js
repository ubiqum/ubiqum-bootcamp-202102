console.log('TEST Array.prototype.includes()')

console.log('CASE should return true when checking [1, 2, 3] includes 2')

var array = [1, 2, 3];

console.assert(array.includes(2) === true, 'expected output: true')