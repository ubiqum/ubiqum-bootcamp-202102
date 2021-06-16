function getCurrentUser(callback) {
    $.get("/api/username")
        .done(function (username) {
            callback(null, username ? username : null)
        })
        .fail(function () {
            callback(error)
        })
}