function joinInGame(gameId, callback) {
    $.post("/api/game/" + gameId + "/players")
        .done(function (gamePlayerId) {
            callback(gamePlayerId)
        })
        .fail(function () {
            callback(error)
        })
}
