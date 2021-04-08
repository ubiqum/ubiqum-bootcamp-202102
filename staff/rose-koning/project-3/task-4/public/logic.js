function getLocations() {
  var locations = [];
  var games = matches;
  games.forEach((game) => {
    if (!locations.includes(game.location)) {
      locations.push(game.location);
    }
  });
  return locations;
}

function getTeams() {
  var teams = [];
  var games = matches;
  games.forEach((game) => {
    for (i = 0; i < 2; i++) {
      if (!teams.includes(game.teams[i])) {
        teams.push(game.teams[i]);
      }
    }
  });
  sortedTeams = teams.sort();
  return sortedTeams;
}

function getGamesThisTeam(team) {
  var games = matches;
  var filteredGames = games.filter(function (games) {
    return games.teams.includes(team);
  });
  return filteredGames;
}

function getGamesThisLocation(location) {
  var games = matches;
  var filteredGames = games.filter(function (games) {
    if (games.location === location) {
      return games.location;
    }
  });
  return filteredGames;
}

function getGameDetails(gameId) {
  var games = matches;
  var chosenGame = games.filter(function (games) {
    if (games.id === gameId) return games;
  });
  return chosenGame;
}

function getLocationDetails(locationId) {
  var locations = locationDetails;
  var selectedLocation = locations.find(function (location) {
    if (location.id === locationId) return true;
  });
  return selectedLocation;
}

function fetchPosts(gameID, callback) {
  var commentsRef = firebase
    .database()
    .ref("posts/" + gameID)
    .limitToLast(100);
  var posts = [];
  commentsRef.once("value", (snap) => {
    snap.forEach((post) => {
      var key = post.key;
      var title = post.val().subject;
      var body = post.val().body;
      var author = post.val().author;
      var image = post.val().authorPic;
      var photo = post.val().photo;
      var post = { key, title, body, author, image, photo };
      posts.push(post);
    });

    callback(posts);
  });
}

function signIn(callback) {
  firebase.auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider().setCustomParameters({ prompt: 'select_account' }))
      .then(function () {
          callback(null)
      })
}

function isSignedIn() {
  return !!firebase.auth().currentUser
}

function signOut(callback) {
  firebase.auth()
      .signOut()
      .then(function () {
          callback(null)
      })
}

function showPostStation() {
  this.addPost = true;
}

function writeNewPost(gameID, uid, username, profilePicture, subject, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    subject: subject,
    authorPic: profilePicture,
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child("posts").push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/posts/" + gameID + "/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
