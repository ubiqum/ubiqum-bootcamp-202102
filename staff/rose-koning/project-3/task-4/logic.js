function getLocations() {
  var locations = [];
  var games = matches;
  games.forEach((game) => {
    if (!locations.includes(game.location)) {
      locations.push(game.location);
    }
  });
  return locations;
}

function getTeams() {
  var teams = [];
  var games = matches;
  games.forEach((game) => {
    for (i = 0; i < 2; i++) {
      if (!teams.includes(game.teams[i])) {
        teams.push(game.teams[i]);
      }
    }
  });
  sortedTeams = teams.sort();
  return sortedTeams;
}

function getGamesThisTeam(team) {
  var games = matches;
  var filteredGames = games.filter(function (games) {
    return games.teams.includes(team);
  });
  return filteredGames;
}

function getGamesThisLocation(location) {
  var games = matches;
  var filteredGames = games.filter(function (games) {
    if (games.location === location) {
      return games.location;
    }
  });
  return filteredGames;
}

function getGameDetails(gameId){
  var games = matches;
  var chosenGame = games.filter(function(games){
    if(games.id=== gameId)
    return games;
  })
  return chosenGame;
}

function getLocationDetials(location){
  var locations=locationDetails;
  var selectedLocation = locations.filter(function(locations){
    if(locations.id=== location)
    return locations;
  })
  return selectedLocation;
}



