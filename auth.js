function login(){

let email=document.getElementById("email").value

if(email==""){

alert("Please enter email")

return

}

localStorage.setItem("user",email)

window.location="dashboard.html"

}