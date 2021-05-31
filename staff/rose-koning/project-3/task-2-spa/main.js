var firebaseConfig = {
  apiKey: "AIzaSyAngRzgZlzBcYFYfhVWkMuL3MwD1DM2x6Q",
  authDomain: "nysl-1721c.firebaseapp.com",
  databaseURL:
    "https://nysl-1721c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "nysl-1721c",
  storageBucket: "nysl-1721c.appspot.com",
  messagingSenderId: "923926424629",
  appId: "1:923926424629:web:c015e5649cfcf79c8b557c",
  measurementId: "G-Q0SKP2YR4F",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

const app = new Vue({
  el: "#app",
  router,
  created: function () {
    (locations = getLocations()), (teams = getTeams());
  },
});
