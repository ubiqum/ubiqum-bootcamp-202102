
const ByTeams = {
  template: `<div>
    <h1>Teams</h1>
    <div v-for="(team, key) in teams">
    <router-link v-bind:to="'/gamesFor/'+team">{{team}}</router-link>
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
    <h1>Locations</h1>
    <div v-for="(location, key) in locations">
      <router-link v-bind:to="'/gamesPer/'+location">{{location}}</router-link>
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
  <router-link to="/byTeams">Teams</router-link>
  <router-link to="/byLocations">Locations</router-link>
</div>`,
};

const GamesForTeam = {
  template: `<div>
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
    <td><router-link v-bind:to="'/gamesDetails/'+game.id">More Info</router-link></td>
      <td>{{game.location}}</td> 
      <td>{{game.date}}</td> 
      <td>{{game.time}}</td> 
      <td>{{game.teams}}</td> 
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
    <td><router-link v-bind:to="'/gamesDetails/'+game.id">More Info</router-link></td>
      <td>{{game.date}}</td> 
      <td>{{game.time}}</td> 
      <td>{{game.teams}}</td> 
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

const GameDetails={
  template: `<div>
  <h1>Game details</h1>

  <h2>Location: <router-link v-bind:to="'/locationDetails/'+games[0].location">{{games[0].location}}</router-link></td></h2>
  <h2>Date: {{games[0].date}}</h2>
  <h2>Time: {{games[0].time}}</h2>
  <h2>Team: {{games[0].teams}}</h2>

  
  </div>`,
  data(){
    return{
      games: getGameDetails(this.$route.params.id)
    }
  }
}

const North ={
  template: `<div>
  <h1> North Elementary School</h2>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.335548703625!2d-87.64831158466824!3d41.90714487921988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af14860a5%3A0x5736e62f19086c62!2sNorth%20Elementary!5e0!3m2!1sen!2ses!4v1616603683428!5m2!1sen!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>`
}

const Contact = {
  template: `<div><h1>Contact</h1>
<h2>You can email us at dskfsdkfjsd</h2></div>`,
};

const routes = [
  { path: "/games", component: Games },
  { path: "/contact", component: Contact },
  { path: "/byTeams", component: ByTeams },
  { path: "/byLocations", component: ByLocations },
  { path: "/gamesFor/:team", component: GamesForTeam },
  { path: "/gamesPer/:location", component: GamesForLocation },
  { path: "/gamesDetails/:id", component: GameDetails },
  { path: "/locationDetails/:name", component: GameDetails },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: "#app",
  router,
  created: function () {
    (locations = getLocations()), (teams = getTeams());
  },
});
