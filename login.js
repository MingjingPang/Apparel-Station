firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
    	// User logged in
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){

      	var email = user.email;
      	document.getElementById("userpara").innerHTML = "Welcome User: " + email;
      }

    } else {
    	// User not logged in
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

function login() {

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;

  	window.alert ("Error: " + errorMessage);
  	// ...
	});

}

function logout () {
    firebase.auth().signOut();
}