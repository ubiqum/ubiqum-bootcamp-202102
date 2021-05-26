function searchVehicles(query, callback) {
    if (typeof query !== 'string') throw new TypeError(query +  ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    fetch('https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)
        .then(function(response) {
            if (response.ok)
                return response.json()

            throw new Error('search fail with status ' + response.status)
        })
        .then(function(vehicles) {
            callback(null, vehicles)       
        })
        .catch(function(error) {
            callback(error)
        })
}