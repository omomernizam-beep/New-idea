window.onload = function() {
    let role = localStorage.getItem("userRole");

    // Role ke mutabiq view dikhana
    if(role === 'investor') {
        document.getElementById("investor-view").style.display = "block";
        loadPitchesForInvestor();
    } else {
        document.getElementById("entrepreneur-view").style.display = "block";
        populateCities();
    }
};

// Cities Dropdown Bharne ka function
function populateCities() {
    const dropdown = document.getElementById("city-dropdown");
    if (dropdown && typeof cities !== 'undefined') {
        dropdown.innerHTML = '<option value="">-- Select a City --</option>';
        
        // Cities ko sort karna A-Z
        cities.sort((a, b) => a.city.localeCompare(b.city));

        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city} (${c.country})`;
            dropdown.appendChild(opt);
        });
    }
}

// Pitch Publish karne ka function
function publishPitch() {
    let idea = document.getElementById("idea-text").value;
    let citySelect = document.getElementById("city-dropdown");
    let cityName = citySelect.options[citySelect.selectedIndex].text;

    if(idea.length < 10) return alert("Pehle mukammal idea likhen!");

    let newPitch = {
        idea: idea,
        city: cityName,
        market: parseInt(citySelect.value).toLocaleString(),
        date: new Date().toLocaleString()
    };

    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    allPitches.unshift(newPitch);
    localStorage.setItem("allPitches", JSON.stringify(allPitches));

    alert("Pitch published! Investors can now see your idea.");
}

// Investor ke liye pitches load karna
function loadPitchesForInvestor() {
    let wall = document.getElementById("pitch-wall");
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");

    if(allPitches.length === 0) {
        wall.innerHTML = "<p>No active pitches found.</p>";
        return;
    }

    wall.innerHTML = allPitches.map(p => `
        <div style="background: rgba(255,255,255,0.1); padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #2ecc71;">
            <h4 style="color: #00d4ff; margin: 0;">Market: ${p.city}</h4>
            <p style="margin: 10px 0; font-size: 14px;">${p.idea}</p>
            <small style="color: #aaa;">Potential Reach: ${p.market} people | ${p.date}</small>
        </div>
    `).join("");
}