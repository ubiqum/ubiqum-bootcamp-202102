const ByTeams = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
      <h1>Select your Team</h1>
      <div v-for="(team, key) in teams">
      <router-link class="button" v-bind:to="'/gamesFor/'+team">{{team}}</router-link>
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
      <div v-for="(location, key) in locations">
        <router-link class="button" v-bind:to="'/gamesPer/'+location">{{location}}</router-link>
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
  <h1>Select your game by</h1>
    <router-link class="button" to="/byTeams">Teams</router-link>
    <router-link class="button" to="/byLocations">Locations</router-link>
  </div>`,
  };
  
  const GamesForTeam = {
    template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <table>
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
    <table>
      <thead>
        <th>Game Info</th>
        <th>Date</th>
        <th>Time</th>
        <th>Teams</th>
      </thead>
      <tbody>
      <tr v-for="(game, key) in games"> 
      <td class="button button__goback"><router-link v-bind:to="'/gamesDetails/'+game.id">More Info</router-link></td>
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
    <h2>Game details</h2>
  
    <h2>Location: <router-link class="button" v-bind:to="'/locationDetails/'+games[0].location">{{games[0].location}}</router-link></td></h2>
    <p><b>Date:</b> {{games[0].date}}</p>
    <p><b>Time:</b> {{games[0].time}}</p>
    <p><b>Teams:</b> {{games[0].teams.join(" against ")}}</p>
  
    
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
    <h2>{{locations[0].name}}</h2>
    <p>{{locations[0].address}}</p>
    <iframe v-bind:src="locations[0].map" width="330" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>`,
    data(){
      return{
        locations: getLocationDetials(this.$route.params.location)
      }
    }
  };
  
  
  const Contact = {
    template: `<div><h1>Contact</h1>
  <h2>You can email us at dskfsdkfjsd</h2></div>`,
  };