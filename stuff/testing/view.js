function handleResults(error, vehicles) {
    if (error) return alert(error.message)

    var ul = document.querySelector('ul')

    ul.innerHTML = ''

    if (vehicles.length)
        return vehicles.forEach(function (vehicle) {
            var li = document.createElement('li')

            var h2 = document.createElement('h2')
            h2.innerText = vehicle.name

            var img = document.createElement('img')
            img.src = vehicle.thumbnail

            li.append(h2, img)

            ul.append(li)
        })

    var li = document.createElement('li')

    li.innerText = 'Sorry, no results :/'

    ul.append(li)
}

function handleForm(callback) {
    var form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        var query = event.target.query.value

        callback(query)
    })
}