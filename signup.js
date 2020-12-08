 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = 
  {
    apiKey: "AIzaSyAabP0_wNf6rRz4q_YFjwPps4MOA0jZpiM",
    authDomain: "apparel-station.firebaseapp.com",
    databaseURL: "https://apparel-station.firebaseio.com",
    projectId: "apparel-station",
    storageBucket: "apparel-station.appspot.com",
    messagingSenderId: "342533671958",
    appId: "1:342533671958:web:57f077903c31308e11f937",
    measurementId: "G-WBY1WDERHP"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();


    function signUp(){
        var email =  document.getElementById("email");
        var password =  document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value.password.value); 
        promise.catch(e => alert(e.message));

        alert("Signed Up")
    }
