
const routes = [
  { path: "/games", component: Games },
  { path: "/contact", component: Contact },
  { path: "/byTeams", component: ByTeams },
  { path: "/byLocations", component: ByLocations },
  { path: "/gamesFor/:team", component: GamesForTeam },
  { path: "/gamesPer/:location", component: GamesForLocation },
  { path: "/gamesDetails/:id", component: GameDetails },
  { path: "/locationDetails/:location", component: LocationDetails },
];

const router = new VueRouter({
  routes,
});

 var app = new Vue({
  el: "#app",
  router,
  methods: { newSignIn: newSignIn },
  created: function () {
    (locations = getLocations()), (teams = getTeams());
  },
  
});
