// login with google
function newSignIn(callback) {
    // function onAuthStateChanged(user) {
    //     writeUserData(user.uid, user.displayName, user.email, user.photoURL)
    // }
    // firebase.auth().onAuthStateChanged(onAuthStateChanged);
    firebase.auth().onAuthStateChanged(callback);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

//store user info in database
function writeUserData(userId, name, email, imageUrl) {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
  }