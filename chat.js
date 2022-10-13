// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAi686GEL3SFUSuq7OBwZmosqMb8UC2dPM",
    authDomain: "lets-chat-time.firebaseapp.com",
    databaseURL: "https://lets-chat-time-default-rtdb.firebaseio.com",
    projectId: "lets-chat-time",
    storageBucket: "lets-chat-time.appspot.com",
    messagingSenderId: "15887333921",
    appId: "1:15887333921:web:2b804c755729a0028ec160"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
}



