function getCell() {
    var cell = [11];
    cell[0] = [11];
    console.log(cell[0][0])
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