// Firebase configuration
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

  //Sign up function and redirect to Sign in Page
    function signUp()
        {
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("Signed Up");

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
              console.log(firebaseUser);
              window.location = 'LogInApparelStation.html';
            } else {
              console.log('Sign Up Error! Please Try Again!');
            }
          });
        }
    
  //Sign in function and redirect to Main Page 
    function signIn(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed In " + email.value);

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
              console.log(firebaseUser);
              window.location = 'MainPage.html';
            } else {
              console.log('Sign In Error! Please Try Again!');
            }
          });
    }
    
//Sign out function 
    function signOut(){
        auth.signOut();
        alert("Signed Out");
        window.location = 'MainPage.html'
        }
   


    

