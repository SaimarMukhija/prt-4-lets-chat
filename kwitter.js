const firebaseConfig = {
    apiKey: "AIzaSyAe6pgJA6kJ4HRrPP_37DLZAqXhlL28HW8",
    authDomain: "kwitter-real-1e37b.firebaseapp.com",
    databaseURL: "https://kwitter-real-1e37b-default-rtdb.firebaseio.com",
    projectId: "kwitter-real-1e37b",
    storageBucket: "kwitter-real-1e37b.appspot.com",
    messagingSenderId: "827220914098",
    appId: "1:827220914098:web:364cdb8392dcd9fc1b3eab",
    measurementId: "G-PR2N37LW5F"
  };
  firebase.initializeApp(firebaseConfig);

function adduser() {

    user_name = document.getElementById ("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });


    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}