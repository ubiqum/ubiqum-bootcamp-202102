function searchVehicles(query, callback) {
    fetch('https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=' + query)
        .then(function(response) {
            return response.json()
        })
        .then(function(cars) {
            callback(cars)
        })
}

searchVehicles('batman', function(cars) {
    document.open()

    document.write('<body></body>')

    var ul = document.createElement('ul')

    cars.forEach(function(car) {
        //console.log(car.name)

        var li = document.createElement('li')        

        var h2 = document.createElement('h2')

        h2.innerText = car.name

        var img = document.createElement('img')

        img.src = car.thumbnail
        
        li.append(h2, img)

        ul.append(li)
    })

    document.body.append(ul)
})

searchVehicles('spiderman', function(cars) {
    cars.forEach(function(car) {
        console.log(car)
    })
})