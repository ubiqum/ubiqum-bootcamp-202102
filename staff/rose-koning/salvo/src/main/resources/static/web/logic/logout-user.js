function logoutUser(username, callback) {
    $.post("/api/logout", { username })
        .done(function () {
            callback(null)
        })
        .fail(function (error) {
            callback(error)
        })
}