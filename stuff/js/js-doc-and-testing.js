/**
 * Salutes a person given by a name.
 *
 * @param {string} name - The name of the person to salute.
 * 
 * @returns {string} The salutation for the person.
 */
function salute(name) {
    return 'Hello, ' + name + '!'
    //return 'Hello, Rose!'
}

// TEST CASE salutation for Rose

var result = salute('Rose')

console.assert(result === 'Hello, Rose!', 'should result be a salutation to Rose')

// TEST CASE salutation for Puja

//debugger

var result = salute('Puja')

console.assert(result === 'Hello, Puja!', 'should result be a salutation to Puja')

