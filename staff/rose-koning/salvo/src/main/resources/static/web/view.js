const Home = {
  template: `<div>
<h1> Welcome to Salvo</h1>
<router-link to="/games">Overview of games</router-link>
</div>`
};

const Games = {
  template: `
<div>
<h1>Salvo!</h1>
    <ol id="games">
    <div v-for="(game, key) in games">
      <router-link v-bind:to="'/game/'+game.id"><li>{{game.created}}</li></router-link>
        <ol>
        <div v-for="(gamePlayer, key) in game.gamePlayers">
        <li>{{gamePlayer.userName}}</li>
        </div>
        </ol>
    </div>
</ol>
</div>`,
  data(){
    return{
      games: null,
      gamePlayers: null
    }
  },
  created(){
    getGames(function (games){
      this.games = games;
    }.bind(this))
  }
};

const Game = {
  template: `
  <div>
  <h1> Ship Locations!</h1>
  {{gameData.created}}
  <div v-for="(gamePlayer, key) in gameData.gamePlayers">
  <p>{{gamePlayer.player.userName}}</p>
  </div>

  <div class="grid">
  <h2>Your ships</h2>
  <div class="grid__container" id="ships">
  <template v-for="(cell, key) in cells">
  <template v-if="isShip(cell)">
    <div class="cell--active">{{cell}}</div>
  </template>
  <template v-else>
    <div class="cell">{{cell}}</div>
  </template>
  </template>
  </div>

  <h2>Your salvoes</h2>
  <div class="grid__container" id="salvoes">
    <template v-for="(cell, key) in cells">
    <template v-if="isSalvo(cell)">
      <div class="salvo--shot">{{cell}}</div>
    </template>
    <template v-else>
      <div class="salvo">{{cell}}</div>
    </template>
    </template>
 
  </div>

  </div>
  </div>
`,
  data() {
    return {
  cells: getCells(),
  gameData: {},
  ships: {},
  salvoes:{}
}
    },
    created(){
      this.fetchData()
    },
    methods:{
      fetchData(){
        var gameId =this.$route.params.id;
        getGameView(gameId, function(game){
          this.gameData =game;
          this.ships = game.ships;
          this.salvoes = game.salvoes;
        }.bind(this))
      },
      isSalvo(location) {
        return isSalvoInLocation(this.salvoes, location)
    },
      isShip(location){
        return isShipInLocation(this.ships, location)
      }
    }
}

const routes = [
  { path: '/', redirect: '/home', component: Home },
  { path: "/home", component: Home },
  { path: "/games", component: Games },
  { path: "/game/:id", component: Game }
];

const router = new VueRouter({
  routes,
});

function isSalvoInLocation(salvoes, location) {
  return salvoes.some(salvo => salvo.location.includes(location))
} 

function isShipInLocation(ships, location){
  return ships.some(ship => ship.location.includes(location))
}
