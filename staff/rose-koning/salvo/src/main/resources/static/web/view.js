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
<div class="grid__container" >
<div v-for="(cell,key) in cells">
  <div class="cell" v-bind:id="cell">{{cell}}</div>
  </div>
  </div>
</div>
`,
  data() {
    return {
  cells: getCells()
    };
  },
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