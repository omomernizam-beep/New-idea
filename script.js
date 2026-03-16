document.addEventListener("DOMContentLoaded", function() {
    let role = localStorage.getItem("userRole");

    if(role === 'investor') {
        document.getElementById("investor-view").style.display = "block";
        loadPitchesForInvestor();
    } else {
        document.getElementById("entrepreneur-view").style.display = "block";
        renderCities();
    }
});

// 1. Render Cities from cities.js
function renderCities() {
    const dropdown = document.getElementById("city-dropdown");
    if (typeof cities !== 'undefined' && dropdown) {
        dropdown.innerHTML = '<option value="">-- Select Target City --</option>';
        cities.sort((a, b) => a.city.localeCompare(b.city)); // A-Z Sorting
        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            dropdown.appendChild(opt);
        });
    }
}

// 2. Publish Pitch Logic
function publishPitch() {
    const idea = document.getElementById("idea-text").value.trim();
    const citySelect = document.getElementById("city-dropdown");
    const cityName = citySelect.options[citySelect.selectedIndex]?.text;

    if (!idea || !cityName || cityName.includes("Select")) {
        alert("Pehle city select karen aur apna idea likhen!");
        return;
    }

    const newPitch = {
        idea: idea,
        city: cityName,
        market: parseInt(citySelect.value).toLocaleString(),
        date: new Date().toLocaleString()
    };

    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    allPitches.unshift(newPitch);
    localStorage.setItem("allPitches", JSON.stringify(allPitches));

    alert("Pitch published successfully! Investors can now view it.");
    document.getElementById("idea-text").value = ""; // Clear input
}

// 3. Load Pitches for Investor View
function loadPitchesForInvestor() {
    const wall = document.getElementById("pitch-wall");
    const allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");

    if (allPitches.length === 0) {
        wall.innerHTML = "<p style='color:#666;'>No active business pitches found.</p>";
        return;
    }

    wall.innerHTML = allPitches.map(p => `
        <div style="background:rgba(255,255,255,0.05); padding:15px; margin-bottom:15px; border-radius:10px; border:1px solid #333;">
            <div style="display:flex; justify-content:space-between;">
                <b style="color:#00ffcc;">${p.city}</b>
                <small style="color:#555;">${p.date}</small>
            </div>
            <p style="margin:10px 0; font-size:14px; color:#ddd;">${p.idea}</p>
            <div style="font-size:12px; color:#2ecc71;">Market Reach: ${p.market} Potential Users</div>
        </div>
    `).join("");
}

// 4. Logout Function
function logoutUser() {
    localStorage.removeItem("userRole");
    window.location.href = "index.html";
}