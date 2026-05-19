// Wait until page fully load
document.addEventListener("DOMContentLoaded", function(){

  let userId = localStorage.getItem("currentUser");


  let data = JSON.parse(localStorage.getItem(userId)) || {};

  // Load image
  if (data.img) {
    document.getElementById("profilePic").src = data.img;
  }

  // Load name
  if (data.name) {
    document.getElementById("username").value = data.name;
  }

  // Load email
  if (data.email) {
    document.getElementById("email").value = data.email;
  } else {
    document.getElementById("email").value = userId;
  }

});


// Upload button
function uploadImg(){
  document.getElementById("upload").click();
}


// Image preview
document.getElementById("upload").addEventListener("change", function(){

  let file = this.files[0];

  if(file){
    let reader = new FileReader();

    reader.onload = function(){
      document.getElementById("profilePic").src = reader.result;
    };

    reader.readAsDataURL(file);
  }

});


// Save profile
function saveProfile(){

  let userId = localStorage.getItem("currentUser");

  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let img = document.getElementById("profilePic").src;

  let data = {
    name: name,
    email: email,
    img: img
  };

  localStorage.setItem(userId, JSON.stringify(data));

  // Toast message
  let msg = document.createElement("div");
  msg.innerText = "Profile Saved ✅";

  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "#4CAF50";
  msg.style.color = "#fff";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "8px";
  msg.style.fontSize = "14px";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
    window.location.href = "home.html";
  }, 1000);

}