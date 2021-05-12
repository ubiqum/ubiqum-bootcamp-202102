function retrieveEvents(callback) {
    fetch('./events.json')
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