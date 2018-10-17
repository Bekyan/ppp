import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBqg9re-uIdDl9SDVlWUR8EmNjauWJYlsE",
    authDomain: "personal-kpi-dashboard.firebaseapp.com",
    databaseURL: "https://personal-kpi-dashboard.firebaseio.com",
    projectId: "personal-kpi-dashboard",
    storageBucket: "personal-kpi-dashboard.appspot.com",
    messagingSenderId: "86643317063"
  };

firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/fitness.activity.read');

var authenticate = function() {
  return firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = result.credential.accessToken;
    //var user = result.user;
    //return user;
    return result;
    // ...
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  })
}

export {authenticate};
