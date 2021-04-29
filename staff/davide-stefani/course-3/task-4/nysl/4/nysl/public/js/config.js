var firebaseConfig = {
    apiKey: "AIzaSyACpcAehhmcgmanbExBlQSoSeSSLsnqs84",
    authDomain: "nysl-c9be5.firebaseapp.com",
    databaseURL: "https://nysl-c9be5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nysl-c9be5",
    storageBucket: "nysl-c9be5.appspot.com",
    messagingSenderId: "622716138614",
    appId: "1:622716138614:web:b2f6f8332737d256abdb57",
    measurementId: "G-08ERX3X9JH"
  };

  if(!firebaseConfig.apps.length){
    firebase.initializeApp(firebaseConfig);
  }