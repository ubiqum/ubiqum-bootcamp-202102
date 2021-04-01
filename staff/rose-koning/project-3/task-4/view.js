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
  
    <section>
    <p class="text-center"><b>Location:</b> <router-link class="button" v-bind:to="'/locationDetails/'+games[0].location">{{games[0].location}}</router-link></td></h2>
    <p class="text-center"><b>Date:</b> {{games[0].date}}</p>
    <p class="text-center"><b>Time:</b> {{games[0].time}}</p>
    <p class="text-center"><b>Teams:</b> {{games[0].teams.join(" against ")}}</p>
    </section>
    <section class="text-center">
    <p v-if="!loggedIn">to see comments an pictures log in</p>
    <button id="sign-in-button" v-on:click="signIn" v-if="!loggedIn"><i class="bi bi-person-fill"></i>Login with google</button>
    </section>
    <section v-if="loggedIn" class="text-center">
    <button v-on:click="showPostStation">write post</button>
      <div class="card" v-if="addPost">
        <div class="card-header text-center" >
          New Post
        </div>
        <div class="card-body text-center">
          <h5 class="card-title"><input v-model="subject" placeholder="add subject"></h5>
          <p class="card-text"><textarea v-model="body" placeholder="write your post here"></textarea></p>
          <input type="file">
          <a v-on:click="writeNewPost" class="btn btn-primary">Add post</a>
        </div>
      </div>
      <div v-for="(post,key) in recentPosts" class="text-center">
        <div>
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">written by:{{post.author}}</h6>
              <p class="card-text">{{post.body}}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>`,
  data() {
    return {
      games: getGameDetails(this.$route.params.id),
      loggedIn: false,
      subject: "",
      body: "",
      selectedImage: " ",
      addPost: false,
      gameID: this.$route.params.id,
      recentPosts: [],
    };
  },
  created: function () {
    fetchPosts(this.$route.params.id, (posts) => {
      this.recentPosts = posts;
    });
  },
  methods: {
    signIn() {
      newSignIn((user) => {
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
    },
    showPostStation() {
      this.addPost = true;
    },
    writeNewPost() {
      var uid = firebase.auth().currentUser.uid;
      var username = firebase.auth().currentUser.displayName;
      var picture = firebase.auth().currentUser.photoURL;
      writeNewPost(
        this.gameID,
        uid,
        username,
        picture,
        this.subject,
        this.body
      );
      this.addPost = false;
      this.recentPosts.push({
        author: username,
        image: picture,
        title: this.subject,
        body: this.body,
      });
    },
  },
};

const LocationDetails = {
  template: `<div>
    <a class="button button__goback" href="javascript:history.go(-1)"> Go Back</a>
    <h2 class="text-center">{{location.name}}</h2>
    <p class="text-center">{{location.address}}</p>
   
    <div id="map"></div>
    </div>
    </div>`,
  data() {
    return {
      location: getLocationDetails(this.$route.params.location),
    };
  },
};

const Contact = {
  template: `<div><h1 class="text-center">Contact</h1>
  <p class="text-center">You can email us at info@NYSL.com</p></div>`,
};


