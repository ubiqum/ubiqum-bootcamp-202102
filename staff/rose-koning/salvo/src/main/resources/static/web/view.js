const Home = {
  template: `<div>

<h1> Welcome to Salvo</h1>
<div v-if="!user">
<h2>sign in to start</h2>

<h3>Are you registered?</h3>
<button v-on:click="showLogin = !showLogin; showRegistration = showRegistration;">Yes, sign in</button><button v-on:click="showRegistration = !showRegistration; showLogin = showLogin;">No, let´s register</button>
</div>

<div class="login-box" v-if="showLogin">
<h2>login here</h2>
<form id="login" >
<label>Name:<input v-model="username"></label>
<label>Password:<input v-model="password"></label>
<button v-on:click="authenticate(username,password)">login</button>
</form>
</div>

<div class="login-box" v-if="showRegistration">
<h2>register here</h2>
<form id="registration">
<label>Name:<input v-model="username"></label>
<label>Password:<input v-model="password"></label>
<button v-on:click="register(username,password)">register</button>
</form>
</div>

<router-link to="/games" v-if="user">Overview of games</router-link>
</div>`,
data(){
  return{
    user: "",
    password: "",
    showLogin: false,
    showRegistration: false,
  }
},
methods:{
  authenticate:authenticateUser,
  register:registerUser,
  getuser: getCurrentUser,
  logout: logoutUser
}
}

const Games = {
  template: `
<div>
<h1>Salvo!</h1>
    <ol id="games">
    <div v-for="(game, key) in games">
      <router-link v-bind:to="'/game/'+game.id"><li>{{game.created}}</li></router-link>
        <ol>
        <div v-for="(gamePlayer, key) in game.gamePlayers">
        <li>{{gamePlayer.username}}</li>
        </div>
        </ol>
    </div>
</ol>
</div>`,
  data() {
    return {
      games: null,
      gamePlayers: null
    }
  },
  created() {
    getGames(function (games) {
      this.games = games;
    }.bind(this))
  }
};

const Game = {
  template: `
  <div>
    <h1> Ship Locations!</h1>
    {{gameData.created}}
    <h2>{{currentPlayer.player.username}}, you are playing against: {{opponent.player.username}}</h2>

  <div class="flex-container">

  <div class="flex-container__item">
    <h2>Your ships</h2>
    <div class="grid-container" id="ships">
      <template v-for="(cell, key) in cells">
      <template v-if="isShip(cell)">
        <div class="grid-container__cell--ship">{{cell}}</div>
      </template>
      <template v-else>
        <div class="grid-container__cell">{{cell}}</div>
      </template>
      </template>
    </div>
  </div>

  <div class="flex-container__item">
    <h2>Your salvoes</h2>
    <div class="grid-container" id="salvoes">
      <template v-for="(cell, key) in cells">
      <template v-if="isSalvo(cell)">
        <div class="grid-container__cell--salvo">{{cell}}</div>
      </template>
      <template v-else>
        <div class="grid-container__cell">{{cell}}</div>
      </template>
      </template>
    </div>
  </div>

  </div>
  </div>
`,
  data() {
    return {
      cells: getCells(),
      gameData: {},
      ships: {},
      salvoes: {},
      currentPlayer: {},
      opponent: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      var gamePlayerId = this.$route.params.id;
      getGameView(gamePlayerId, function (game) {
        this.gameData = game;
        this.ships = game.ships;
        this.salvoes = game.salvoes;
        this.gamePlayerId = gamePlayerId;
        var gamePlayers = game.gamePlayers;
        for (var i = 0; i < gamePlayers.length; i++) {
          if (gamePlayers[i].id == this.gamePlayerId) {
            var currentPlayer = gamePlayers[i];
          }
          else {
            var opponent = gamePlayers[i];
          }
        }
        this.currentPlayer = currentPlayer;
        this.opponent = opponent;
      }.bind(this))
    },
    isSalvo(location) {
      return isSalvoInLocation(this.salvoes, location)
    },
    isShip(location) {
      return isShipInLocation(this.ships, location)
    }
  }
}

const routes = [
  { path: '/', redirect: '/home', component: Home },
  { path: "/home", component: Home },
  { path: "/games", component: Games },
  { path: "/game/:id", component: Game },
];

const router = new VueRouter({
  routes,
});

function isSalvoInLocation(salvoes, location) {
  return salvoes.some(salvo => salvo.location.includes(location))
}

function isShipInLocation(ships, location) {
  return ships.some(ship => ship.location.includes(location))
}
