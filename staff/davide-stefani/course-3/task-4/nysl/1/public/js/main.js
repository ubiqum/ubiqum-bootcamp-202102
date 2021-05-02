function retrieveSeptGameSchedules(callback)
{
    var gameDataSept = [];
    if(!localStorage.getItem('game_sept_data'))
	{ 
        fetch('../task2/model/dataSept.json')
        .then(response => response.json())
        .then(function(september)
        {
            gameDataSept = september.results;
            localStorage.setItem('game_sept_data', JSON.stringify(gameDataSept));
        });
        callback(gameData);
    }
    else
    { 
        gameDataSept = JSON.parse(localStorage.getItem('game_sept_data'));
        callback(gameDataSept); 
    }
}


function retrieveOctGameSchedules(callback)
{
    var gameDataOct = [];
    if(!localStorage.getItem('Game_Oct_data'))
	{ 
        fetch('../task2/model/dataOct.json')
        .then(response => response.json())
        .then(function(data)
        {
            gameDataOct = data.results;
            localStorage.setItem('Game_Oct_data', JSON.stringify(gameDataOct));
        });
        callback(gameDataOct);
    }
    else
    { 
        gameDataOct = JSON.parse(localStorage.getItem('Game_Oct_data'));
        callback(gameDataOct); 
    }
}