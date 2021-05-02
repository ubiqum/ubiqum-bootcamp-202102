function displayData() {
    var x = document.getElementById('registrationData');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


function retrieveSeptSchedules(callback) {
    var gameDataSept = [];
    if (!localStorage.getItem('game_sept_data')) {
        fetch('../js/dataSept.json')
            .then(response => response.json())
            .then(function (september) {
                gameDataSept = september.results;
                localStorage.setItem('game_sept_data', JSON.stringify(gameDataSept));
            });
        callback(gameDataSept);
    }
    else {
        gameDataSept = JSON.parse(localStorage.getItem('game_sept_data'));
        callback(gameDataSept);
    }
}

function retrieveOctSchedules(callback) {
    var gameDataOct = [];
    if (!localStorage.getItem('Game_Oct_data')) {
        fetch('../js/dataOct.json')
            .then(response => response.json())
            .then(function (data) {
                gameDataOct = data.results;
                localStorage.setItem('Game_Oct_data', JSON.stringify(gameDataOct));
            });
        callback(gameDataOct);
    }
    else {
        gameDataOct = JSON.parse(localStorage.getItem('Game_Oct_data'));
        callback(gameDataOct);
    }
}

function retrieveGameInfo(callback) {
    var gameDataInfo = [];
    if (!localStorage.getItem('Game_Info_data')) {
        fetch('js/dataInfo.json')
            .then(response => response.json())
            .then(function (data) {
                gameDataInfo = data.results;
                localStorage.setItem('Game_Info_data', JSON.stringify(gameDataInfo));
            });
        callback(gameDataInfo);
    }
    else {
        gameDataInfo = JSON.parse(localStorage.getItem('Game_Info_data'));
        callback(gameDataInfo);
    }
}