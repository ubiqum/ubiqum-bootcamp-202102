function registerUser(username, password, callback) {
    $.post("/api/players", {
        username,
        password
    })
        .done(function () {
            callback(null)
        })
        .fail(function (error) {
            callback(error)
        })
}