function setShips(gamePlayerId, ships, callback) {
    $.ajax({
        type: "POST",
        url: "/api/games/players/" + gamePlayerId + "/ships",
        data: JSON.stringify(ships),
        contentType: "application/json"
    })
        .done(function () {
            callback()
        })
        .fail(function (error) {
            callback(error)
        })
}