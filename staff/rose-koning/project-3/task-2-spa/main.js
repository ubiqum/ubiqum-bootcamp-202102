
const byTeams = {
  template: `<div>
    <h1>Teams</h1>
    <div v-for="(team, key) in teams">
    <router-link to="/gamesForTeam">{{team}}</router-link>
    </div>
  </div>`,
  data() {
    return {
      teams: getTeams(),
    };
  },
};

const byLocations = {
  template: `<div><h1>Locations</h1><div v-for="(location, key) in locations">
    <router-link to="/gamesFor/{{location}}/">{{location}}</router-link>
    </div></div>`,
  data() {
    return {
      locations: getLocations(),
    };
  },
};

const games = {
  template: `<div>
<h1>Select your game by</h1>
  <router-link to="/byTeams">Teams</router-link>
  <router-link to="/byLocations">Locations</router-link>
</div>`,
};

const gamesForTeam = {
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
      <td><router-link to="/gameDetails">More Info</router-link></td>
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
      games: getGamesThisTeam("U1"),
    };
  },
};

const gamesForLocation = {
  template: `<div>
  <h2>Location name</h2>
  <table>
    <thead>
      <th>Date</th>
      <th>Time</th>
      <th>Teams</th>
    </thead>
    <tbody>
    <tr v-for="(game, key) in games"> 
      <td>{{game.date}}</td> 
      <td>{{game.time}}</td> 
      <td>{{game.teams}}</td> 
    </tr>
    </tbody>
  </table>
</div>`,
  data() {
    return {
      games: getGamesThisTeam(),
    };
  },
};

const contact = {
  template: `<div><h1>Contact</h1>
<h2>You can email us at dskfsdkfjsd</h2></div>`,
};

const routes = [
  { path: "/games", component: games },
  { path: "/contact", component: contact },
  { path: "/byTeams", component: byTeams },
  { path: "/byLocations", component: byLocations },
  { path: "/gamesForTeam", component: gamesForTeam },
  { path: "/gamesFor/{{location}}", component: gamesForLocation },
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
