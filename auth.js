function login(role) {
    localStorage.setItem("userRole", role);
    window.location = "dashboard.html";
}