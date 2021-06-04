const Home = {
  template: `<div>
  <h1> Welcome to Salvo</h1>

  <h2>To start playing, login or register</h2>
  <router-link to="/login" class="button">Login</router-link> <router-link to="/register" class="button">Register</router-link>

  </div>
`
}

const Register = {
  template: `<div>



<div v-if="!username">
<h2>Register to start playing</h2>
</div>

<div class="main-box">
<h3>Enter name and password</h3>
<form id="login" >
<label>Name:<input v-model="username"></label>
<label>Password:<input v-model="password"></label>
<button v-on:click="register(username, password)">Register</button>
</form>
</div>

<div>
<h4>Already have an account?</h4>
<router-link to="/login" class="button">login</router-link>
</div>

</div>`,
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    register: function (username, password) {
      registerUser(username, password, function (error) {
        if (error) return alert("Username already taken")

        this.$router.push("games");
      }.bind(this))
    },
    getuser: function () {
      getCurrentUser(function (error) {
        if (error) return alert(error)
      }.bind(this))
    },
    logout: logoutUser
  }
}

const Login = {
  template: `<div>

<h1> Welcome to Salvo</h1>

<div class="main-box">
<h2>login</h2>
<form id="login" >
<label>Name:<input v-model="username"></label>
<label>Password:<input v-model="password"></label>
<button v-on:click="authenticate(username, password)">login</button>
</form>

<h4>Don´t have an account yet? register to start playing</h4>

<router-link to="/registration" class="button">Register here</router-link>
</div>

</div>`,
  data() {
    return {
      username: null,
      password: "",
      showLogin: false,
      showRegistration: false,
    }
  },
  methods: {
    authenticate: function (username, password) {
      authenticateUser(username, password, function (error) {
        if (error) return alert("wrong credentials")

        this.$router.push("games");
      }.bind(this))
    },
    getuser: function () {
      getCurrentUser(function (error, username) {
        if (error) return alert(error)

        this.username = username
      }.bind(this))
    },
  }
}


const Games = {
  template: `
<div>
  <button v-on:click="logout()" class="button">Logout</button>
  <h1>Salvo!</h1>
  <div class="main-box">
    <ol id="games">
      <div v-for="(game, key) in games">
        <li>
          {{game.created}}
          <div v-for="(gamePlayer, key) in game.gamePlayers">
          {{gamePlayer.player.username}}
          <router-link v-bind:to="'/game/'+ gamePlayer.id" v-if="gamePlayer.isMine" class="button">return to game</router-link>
            <div v-if="game.gamePlayers.length!=2 && !gamePlayer.isMine">
            <button v-on:click="joinGame()" class="button">Join game</button>
            </div>
          </div>
       
        </li>
      </div>
    </ol>
  </div>

  <button v-on:click="createNewGame()">Start a new game</button>
 


</div>`,
  data() {
    return {
      username: null,
      games: null,
      access: false,
    }
  },
  created() {
    getCurrentUser((error, username) => {
      if (error) return alert(error)

      this.username = username

      getGames(games => {
        games.forEach(game => {
           const { gamePlayers } = game

           gamePlayers.forEach(gamePlayer => {
             gamePlayer.isMine = gamePlayer.player.username === username
           })
        })
        this.games = games;
      })
    })
  },
  methods: {
    logout() {
      logoutUser(this.username, error => {
        if (error) return alert(error)

        this.$router.push("home");
      })
    },
    createNewGame(){
      createGame((gamePlayerId, error) =>{
        if(error) return alert(error)

        this.$router.push({ path: `/game/${gamePlayerId}` })
      })
    },
    joinGame(){
      joinInGame((gamePlayerId,error) =>{
        if(error) return alert(error)

        this.$router.push({ path: `/game/${gamePlayerId}` })
      })
    },

  }
};

const Game = {
  template: `
  <div>
    <h1> Ship Locations!</h1>
    {{gameData.created}}
    <h2>{{currentPlayer}}, you are playing against: {{opponent}}</h2>

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
      ships: [],
      salvoes: [],
      currentPlayer: {},
      opponent: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      var gamePlayerId = this.$route.params.gamePlayerId;
      getGameView(gamePlayerId, function (game) {
        this.gameData = game;
        this.ships = game.ships;
        this.salvoes = game.salvoes;
        this.gamePlayerId = gamePlayerId;
        const { gamePlayers } = game;
        for (var i = 0; i < gamePlayers.length; i++) {
          if (gamePlayers[i].id == this.gamePlayerId) {
            var currentPlayer = gamePlayers[i].player.userName;
          }
          else {
            var opponent = gamePlayers[i].player.userName;
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
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/games", component: Games },
  { path: "/game/:gamePlayerId", component: Game },
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
