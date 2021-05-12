function retrieveGameView(gamePlayer, callback) {
    fetch('data/game-view-' + gamePlayer + '.json')
        .then(response => {
            if (response.ok) return response.json()

            throw new Error('http error ' + response.status)
        })
        .then(gameView => {
            callback(null, gameView)
        })
        .catch(error => callback(error))
}