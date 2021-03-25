localStorage.clear()

var jurisdictionID = 'AL'

var page = 1

var data = [{ name: 'Peter' }, { name: 'Jessica' }]

localStorage[jurisdictionID + '-' + page] = JSON.stringify(data)

var page = 2

var data = [{ name: 'Anna' }, { name: 'John' }]

//localStorage[jurisdictionID + '-' + page] = JSON.stringify(data)
localStorage[`${jurisdictionID}-${page}`] = JSON.stringify(data)