function login(role) {
    localStorage.setItem("userRole", role);
    // Yahan hum name save kar letay hain demo ke liye
    if(role === 'investor') {
        localStorage.setItem("userName", "Shark Tank Member");
    }
    window.location = "dashboard.html";
}