console.log('TEST Horroy.prototype.forEach()')

console.log('CASE should iterate all items with for each and multiply them by 10')

var h = new Horroy(1, 2, 3, 4, 5, 6)

var copy = []
for (var i = 0; i < h.length; i++)
    copy[i] = h[i]

h.forEach(function(value, index) {
    h[index] = value * 10
})

for (var i = 0; i < h.length; i++)
    console.assert(h[i] === copy[i] * 10, 'should value at index ' + i + ' be the initial value ' + copy[i] + ' multiplied by 10') 

