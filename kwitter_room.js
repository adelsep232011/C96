
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAa6s0J1onaiE7bJ9IVXBWqUeMbue9j09w",
      authDomain: "kwitter-fe827.firebaseapp.com",
      projectId: "kwitter-fe827",
      storageBucket: "kwitter-fe827.appspot.com",
      messagingSenderId: "42760997765",
      appId: "1:42760997765:web:e5d7d85d9e1686b4cf52ec"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}