function getLocations(){
    locations =[]
    games = gameData.game;
    games.forEach(game => {
        if(!locations.includes(game.location)){
            locations.push(game.location)
        }
    
    });
    return locations;
    }
    function getTeams(){
        teams =[]
        games = gameData.game;
        games.forEach(game => {
            for (i=0; i<2 ; i++){
            if(!teams.includes(game.teams[i])){
                teams.push(game.teams[i])
            }
            }
        });
        return teams;
        }