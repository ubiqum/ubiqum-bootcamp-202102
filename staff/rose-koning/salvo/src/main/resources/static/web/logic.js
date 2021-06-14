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
        .done(function () {
            callback(null)
        })
        .fail(function (error) {
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

function createGame(callback) {
    $.post("/api/games")
        .done(function (gamePlayerId) {
            callback(gamePlayerId)
        })
        .fail(function () {
            callback(error)
        })
}

function joinInGame(gameId, callback) {
    $.post("/api/game/" + gameId + "/players")
        .done(function (gamePlayerId) {
            callback(gamePlayerId)
        })
        .fail(function () {
            callback(error)
        })
}

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

function selectCellsForShip(selectedCells, selectedShip, selectedCell) {
    if (!selectedShip) {
        throw Error("select a ship first!");
    }

    if (selectedCell.length === 1 || selectedCell === "10") {
        throw Error("Not a valid cell!")
    }

    var shipLength = selectedShip.length;
    var placedShips = Object.keys(selectedCells);

    placedShips.forEach(placedShip => {
        if (selectedCells[placedShip].includes(selectedCell)) {
            throw Error("cell is ocupied");
        }
    })

    var currentShip = selectedShip.ship;
    var currentShipPlaced = selectedCells[currentShip];
    if (currentShipPlaced.length != 0) {
        if (currentShipPlaced.length >= shipLength) {
            throw Error("ship placement is completed");
        }
    }

    var cells = selectedCells[selectedShip.ship];

    if (!cells.length) {
        cells.push(selectedCell)

        return selectedCells
    }

    var firstCell = cells[0];
    var cellLength = cells.length - 1;
    var lastCell = cells[cellLength];
    var rowToNumber = "ABCDEFGHIJ";

    if (selectedCell < firstCell) {
        //before

        var xSelected = selectedCell[0];//letter
        var ySelected = selectedCell[1]; //number

        var xFirst = firstCell[0];//first letter
        var yFirst = firstCell[1];//first number

        var xLast = lastCell[0];//first letter
        var yLast = lastCell[1];//first number


        if (xFirst === xLast) {
            if (xSelected === xLast) {
                if (yFirst - ySelected === 1) {
                    cells.push(selectedCell);
                    cells.sort();
                    return selectedCells;
                }
            }
        }

        if (yFirst === yLast) {
            if (ySelected === yLast) {
                var previousLetter = rowToNumber.substring(rowToNumber.indexOf(xFirst) - 1, rowToNumber.indexOf(xFirst));
                if (previousLetter === xSelected) {
                    cells.push(selectedCell);
                    cells.sort();
                    return selectedCells;
                }
            }
        }
    }
    if (selectedCell > firstCell) {
        //after

        if (lastCell === firstCell) {
            cells.push(selectedCell);
            cells.sort();
            return selectedCells;
        }
        var xFirst = firstCell[0];//letter
        var yFirst = firstCell[1];//number

        var xSelected = selectedCell[0];//letter
        var ySelected = selectedCell[1]; //number

        var xLast = lastCell[0];//first letter
        var yLast = lastCell[1];//first number


        if (xFirst === xLast) {
            if (xSelected === xLast) {
                if (ySelected - yLast === 1) {
                    cells.push(selectedCell);
                    cells.sort();
                    return selectedCells;
                }
            }
        }

        if (yFirst === yLast) {
            if (ySelected === yLast) {
                var nextLetter = rowToNumber.substring(rowToNumber.indexOf(xSelected), rowToNumber.indexOf(xSelected) + 1);
                if (nextLetter === xSelected) {
                    cells.push(selectedCell);
                    cells.sort();
                    return selectedCells;
                }
            }
        }

        else {
            throw Error("not a valid input cell");
        }

    }

    return selectedCells
}

function isSalvoInLocation(salvoes, location) {
    if (salvoes != null) {
        return salvoes.some(salvo => salvo.location.includes(location))
    }
}

function isShipInLocation(ships, location) {
    if (ships.length != null){
        var keys = Object.keys(ships);

        return keys.some(ship => {
            if (ships[ship].location.includes(location)) {
                return true;
            }
        })
    }
}

function isCellSelected(cells, location) {
    var keys = Object.keys(cells);

    return keys.some(ship => {
        if (cells[ship] != null && cells[ship].includes(location)) {
            return true;
        }
    }
    )

}
