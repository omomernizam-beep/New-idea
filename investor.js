function findInvestor() {
    let role = localStorage.getItem("userRole");
    let resultDiv = document.getElementById("result");

    if(role === 'investor') {
        resultDiv.innerHTML = "<h3>Welcome back, Investor!</h3><p>You are currently browsing potential startups.</p>";
    } else {
        // Assume an investor is already in our 'database'
        resultDiv.innerHTML = `
            <h3>Matched Investor</h3>
            <p><b>Name:</b> Omar Nizam (Lead Investor)</p>
            <p><b>Interest:</b> Tech & Scalable Startups</p>
            <button onclick="alert('Proposal Sent!')">Send Pitch Deck</button>
        `;
    }
}