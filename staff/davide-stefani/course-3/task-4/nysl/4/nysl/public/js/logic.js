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

var games = matches.results;
fillTable(games);

function fillTable(games) {
  var table = document.getElementById("table-data");
  var tbody = table.querySelector("tbody");


  games.forEach(function (game) {
    var row = document.createElement("tr");

    var date = document.createElement("td");
    date.innerText = game.date;

    var team = document.createElement("td");
    team.innerText = game.teams;

    var location = document.createElement("td");
    location.innerText = game.location;

    var time = document.createElement("td");
    time.innerText = game.time;

    row.append(date, team, location, time)

    table.append(row)

    tbody.append(row);
  });
}

function filterTable(event) {

  var selectedTeams = document.getElementById("teams").value;
  var filteredTeams
  

  if (selectedTeams === "") {
    filteredTeams = games
  } else {
    filteredTeams = games.filter(function (game) {
      return selectedTeams.includes(game.teams);
    })
  }
  fillTable(filteredTeams);
}
