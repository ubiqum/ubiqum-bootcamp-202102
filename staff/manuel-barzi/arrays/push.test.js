// CASE should push one element

var fruits = ['banana', 'apple', 'orange', 'cherry']

var length = push(fruits, 'kiwi')

console.assert(fruits.length === 5, 'fruits length is 5')
console.assert(fruits[0] === 'banana', 'first element is banana')
console.assert(fruits[1] === 'apple', 'second element is apple')
console.assert(fruits[2] === 'orange', 'third element is orange')
console.assert(fruits[3] === 'cherry', 'fourth element is cherry')
console.assert(fruits[4] === 'kiwi', 'fifth element is kiwi')
console.assert(length === 5, 'new length is returned with value 5')

// CASE should push multiple elements

var fruits = ['banana', 'apple', 'orange', 'cherry']

var length = push(fruits, 'kiwi', 'mango')

console.assert(fruits.length === 6, 'fruits length is 6')
console.assert(fruits[0] === 'banana', 'first element is banana')
console.assert(fruits[1] === 'apple', 'second element is apple')
console.assert(fruits[2] === 'orange', 'third element is orange')
console.assert(fruits[3] === 'cherry', 'fourth element is cherry')
console.assert(fruits[4] === 'kiwi', 'fifth element is kiwi')
console.assert(fruits[5] === 'mango', 'sixth element is mango')
console.assert(length === 6, 'new length is returned with value 6')