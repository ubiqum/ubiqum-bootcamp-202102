function displayTeamsAndLocations(teams,locations){

    var app = new Vue({
      el: "#app",
  
      created: function (){
        var locations =getGameLocations();
        var teams = getTeams();
      }
    });
}