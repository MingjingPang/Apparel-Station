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
   
  //Sign Up function and redirect to Sign In Page 
    function signUp()
        {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        alert("You've successfully signed up, please log in to continue shopping!");
        if (auth.createUserWithEmailAndPassword(email.value, password.value))
            {
            window.location.href="LogInApparelStation.html"
            }
        }
    //Sign In fucntion and redirect to Main Page   
    function signIn()
        {
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        
        if (auth.signInWithEmailAndPassword(email.value, password.value))
            {
            window.location.href="MainPage.html"
            }
        else
            {
            alert("Wrong infromation, please try again.")
            }

        }
    
  //Sign Out fucntion and redirect to Main Page 
    function signOut(){
        auth.signOut();
        //alert("Signed Out");
        }
   
    //aler function to show active user and email after signing in 
    auth.onAuthStateChanged(function(user){
    
        if(user)
        {
        var email = user.email;
        alert("Active User " + email);
        //Take user to home page
        //is signed in  
        }
        else
        {
        //alert("No active user");
        //no user is signed in
        }  
        });
        
        
