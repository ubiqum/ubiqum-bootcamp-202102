var locations =getGameLocations();
var teams = getTeams();

function displayTeamsAndLocations(teams,locations){

    var app = new Vue({
      el: "#app",
  
      created: function (){
        var locations =getGameLocations();
        var teams = getTeams();
      }
    });
}

displayTeamsAndLocations(teams,locations);