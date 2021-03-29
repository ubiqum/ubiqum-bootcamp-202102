const ByTeams = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
      <h1 class="text-center">Select your Team</h1>
      <div v-for="(team, key) in teams" class="text-center">
      <router-link class="button button__big" v-bind:to="'/gamesFor/'+team">{{team}}</router-link>
      </div>
    </div>`,
    data() {
      return {
        teams: getTeams(),
      };
    },
  };
  
  const ByLocations = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
      <h1>Locations</h1>
      <div v-for="(location, key) in locations" class="text-center">
        <router-link class="button button__big" v-bind:to="'/gamesPer/'+location">{{location}}</router-link>
      </div>
    </div>`,
    data() {
      return {
        locations: getLocations(),
      };
    },
  };
  
  const Games = {
    template: `<div>
  <h1 class="text-center">Select your game by</h1>
  <div class="text-center">
    <router-link class="button button__big" to="/byTeams">Teams</router-link>
    <router-link class="button button__big" to="/byLocations">Locations</router-link>
  </div>
  </div>`,
  };
  
  const GamesForTeam = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <table class="table">
      <thead>
        <th>Game info</th>
        <th>Location</th>
        <th>Date</th>
        <th>Time</th>
        <th>Teams</th>
      </thead>
      <tbody>
      <tr v-for="(game, key) in games">
      <td><router-link class="button" v-bind:to="'/gamesDetails/'+game.id">More Info</router-link></td>
        <td><router-link v-bind:to="'/locationDetails/'+game.location">{{game.location}}</router-link></td> 
        <td>{{game.date}}</td> 
        <td>{{game.time}}</td> 
        <td>{{game.teams.join(", ")}}</td> 
      </tr>
      </tbody>
    </table>
  </div>`,
    data() {
      return {
        games: getGamesThisTeam(this.$route.params.team),
      };
    },
  };
  
  const GamesForLocation = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <h2>{{this.$route.params.location}}</h2>
    <table class="table">
      <thead>
        <th>Game Info</th>
        <th>Date</th>
        <th>Time</th>
        <th>Teams</th>
      </thead>
      <tbody>
      <tr v-for="(game, key) in games"> 
      <td class="button button__goback btn"><router-link v-bind:to="'/gamesDetails/'+game.id">More Info</router-link></td>
        <td>{{game.date}}</td> 
        <td>{{game.time}}</td> 
        <td>{{game.teams.join(" against ")}}</td> 
      </tr>
      </tbody>
    </table>
  </div>`,
    data() {
      return {
        games: getGamesThisLocation(this.$route.params.location),
      };
    },
  };
  
  const GameDetails = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <h2 class="text-center">Game details</h2>
  
    <p class="text-center"><b>Location:</b> <router-link class="button" v-bind:to="'/locationDetails/'+games[0].location">{{games[0].location}}</router-link></td></h2>
    <p class="text-center"><b>Date:</b> {{games[0].date}}</p>
    <p class="text-center"><b>Time:</b> {{games[0].time}}</p>
    <p class="text-center"><b>Teams:</b> {{games[0].teams.join(" against ")}}</p>
  
    
    </div>`,
    data() {
      return {
        games: getGameDetails(this.$route.params.id),
      };
    },
  };
  
  const LocationDetails = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <h2 class="text-center">{{locations[0].name}}</h2>
    <p class="text-center">{{locations[0].address}}</p>
    <div id="map-container" class="z-depth-1-half map-container" style="height: 500px">
    <iframe v-bind:src="locations[0].map" style="border:0;" allowfullscreen></iframe>
    </div>
    </div>`,
    data(){
      return{
        locations: getLocationDetials(this.$route.params.location)
      }
    }
  };
  
  
  const Contact = {
    template: `<div><h1 class="text-center">Contact</h1>
  <p class="text-center">You can email us at info@NYSL.com</p></div>`,
  };