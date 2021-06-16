function getGameView(gamePlayerId, callback) {
    return fetch("/api/game_view/" + gamePlayerId)
        .then(function (response) {
            if (response.ok)
                return response.json();

            if (response.status === 401)
                throw new Error('session expired')

            throw new Error('unknown error')
        })
        .then(function (game) {
            callback(game)
        })
}