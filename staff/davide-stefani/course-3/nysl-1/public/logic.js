function displayData() {
    var x = document.getElementById('registrationData');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function retrieveGames(callback) {
    fetch('./dataInfo.json')
        .then(response => {
            if (response.ok) return response.json()

            throw new Error('error retrieving events with status ' + response.status)
        })
        .then(events => {
            callback(null, events)
        })
        .catch(error => {
            callback(error)
        })
}

function retrieveParticipants(callback) {
    fetch('./participants.json')
        .then(response => {
            if (response.ok) return response.json()

            throw new Error('error retrieving participants with status ' + response.status)
        })
        .then(participants => {
            callback(null, participants)
        })
        .catch(error => {
            callback(error)
        })
}

function retrieveLocations(callback) {
    fetch('./locations.json')
        .then(response => {
            if (response.ok) return response.json()

            throw new Error('error retrieving locations with status ' + response.status)
        })
        .then(locations => {
            callback(null, locations)
        })
        .catch(error => {
            callback(error)
        })
}