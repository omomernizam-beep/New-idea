function login(){

let email=document.getElementById("email").value
let pass=document.getElementById("password").value

if(email=="" || pass==""){

alert("Please enter details")
return

}

window.location="dashboard.html"

}

function googleLogin(){

alert("Google login demo")

window.location="dashboard.html"

}