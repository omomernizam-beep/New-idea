document.addEventListener("DOMContentLoaded", function() {
    let role = localStorage.getItem("userRole");

    // 1. Role switch
    if(role === 'investor') {
        document.getElementById("investor-view").style.display = "block";
        loadPitchesForInvestor();
    } else {
        document.getElementById("entrepreneur-view").style.display = "block";
        // Dropdown bharne wala function call
        renderCities();
    }
});

function renderCities() {
    const dropdown = document.getElementById("city-dropdown");
    
    // Check if cities array exists from cities.js
    if (typeof cities !== 'undefined' && dropdown) {
        dropdown.innerHTML = '<option value="">-- Select City (500+ available) --</option>';
        
        // Sorting
        cities.sort((a, b) => a.city.localeCompare(b.city));

        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            dropdown.appendChild(opt);
        });
    } else {
        console.error("Cities file not found or dropdown ID missing!");
    }
}

// Investor wall logic
function loadPitchesForInvestor() {
    let wall = document.getElementById("pitch-wall");
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    if(allPitches.length === 0) {
        wall.innerHTML = "<p>No ideas yet.</p>";
        return;
    }
    wall.innerHTML = allPitches.map(p => `
        <div style="background:rgba(255,255,255,0.1); padding:10px; margin-bottom:10px; border-radius:5px; text-align:left;">
            <b style="color:#00ffcc;">${p.city}</b><br>
            <p>${p.idea}</p>
        </div>
    `).join("");
}

// Publish logic
function publishPitch() {
    let idea = document.getElementById("idea-text").value;
    let citySelect = document.getElementById("city-dropdown");
    let cityName = citySelect.options[citySelect.selectedIndex].text;
    
    if(!idea) return alert("Idea likhen!");

    let newPitch = { idea: idea, city: cityName };
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    allPitches.unshift(newPitch);
    localStorage.setItem("allPitches", JSON.stringify(allPitches));
    alert("Pitch Published!");
}