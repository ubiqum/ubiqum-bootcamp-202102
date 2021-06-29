function authenticateUser(username, password, callback) {
    $.post("/api/login", {
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