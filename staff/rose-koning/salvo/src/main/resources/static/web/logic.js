function getCells() {
    var rows = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var columns = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var cells = [];
    for (i = 0; i < columns.length; i++) {

        var column = (columns[i])
        for (j = 0; j < rows.length; j++) {
            var cell = rows[j] + column
            cells.push(cell);
        }
    }
    return cells;

}

function getGames(callback) {
    fetch("/api/games")
        .then(function (response) {
            return response.json();
        })
        .then(function (games) {
            callback(games);
        })
}

function getGameView(gamePlayerId, callback) {
    fetch("/api/game_view/" + gamePlayerId)
        .then(function (response) {
            return response.json();
        })
        .then(function (game) {
            callback(game)
        })
}

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

function logoutUser(username, callback) {
    $.post("/api/logout", { username })
    .done(function(){
        callback(null)
    })
    .fail(function(error){
        callback(error)
    })
}

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

function getCurrentUser(callback) {
    $.get("/api/username")
        .done(function (username) {
            callback(null, username ? username : null)
        })
        .fail(function () {
            callback(error)
        })
}

function createGame(callback){
    $.post("/api/games")
    .done(function(gamePlayerId){
        callback(gamePlayerId)
    })
    .fail(function(){
        callback(error)
    })
}

function joinInGame(gameId,callback){
    $.post("/api/game/"+gameId+"/players")
    .done(function(gamePlayerId){
        callback(gamePlayerId)
    })
    .fail(function(){
        callback(error)
    })
}

function setShips(gamePlayerId, ships, callback){
    $.post("/games/players/"+gamePlayerId+"/ships)",{
        ships
    })
    .done(getGameView(gamePlayerId,callback))
    .fail(function(){
        callback(error)
    })
}

function selectCellForShip(cells, cell, ship) {
    // TODO validate that this cell is selectable for the current ship
    
    cells.push(cell)

    return cells
}