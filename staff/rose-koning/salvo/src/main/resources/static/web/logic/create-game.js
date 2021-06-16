function createGame(callback) {
    $.post("/api/games")
        .done(function (gamePlayerId) {
            callback(gamePlayerId)
        })
        .fail(function () {
            callback(error)
        })
}