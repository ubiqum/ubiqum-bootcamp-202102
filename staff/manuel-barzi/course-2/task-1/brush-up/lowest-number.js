/**
 * Returns the lowest number in the array
 *
 * @param {array} numbers The array of numbers
 *
 * @returns {number} The lowest number in the array
 */
function lowestNumber(numbers) {
    // TODO
}

// TEST CASE should return the lowest number from 2,3,4,1,5

var numbers = [2, 3, 4, 1, 5]

var result = lowestNumber(numbers)

console.assert(result === 1, 'should result be 1')

// TEST CASE should return the lowest number from 2,-3,4,1,5

var numbers = [2, -3, 4, 1, 5]

var result = lowestNumber(numbers)

console.assert(result === -3, 'should result be -3')