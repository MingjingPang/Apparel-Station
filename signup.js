function initApp() {
    document.getElementById('signup').addEventListener('click', handleSignUp, false);
  }
  
  function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
    // [END createwithemail]
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        window.location = 'login.html';
      } else {
        console.log('not logged in');
      }
    });
    //window.location.href = 'home.html';
  }
  
  window.onload = function() {
    initApp();
  }