function findInvestor() {
    let role = localStorage.getItem("userRole");
    let resultDiv = document.getElementById("result");

    if(role === 'investor') {
        resultDiv.innerHTML = "<h3>Investor Dashboard</h3><p>Scanning startups in your preferred sector...</p>";
    } else {
        resultDiv.innerHTML = `
            <h3>Verified Investors for your Idea:</h3>
            <ul style="list-style: none; padding: 0;">
                <li>🚀 <b>M. Omar Nizam</b> - Tech Lead & Angel Investor</li>
                <li>💼 <b>Karachi Venture Partners</b> - Seed Stage Experts</li>
            </ul>
            <button onclick="alert('Pitch Deck Sent!')">Connect Now</button>
        `;
    }
}