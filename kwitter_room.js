
//ADD YOUR FIREBASE LINKS HERE
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

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "switter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='Room_names' onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
          
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitterpage.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}