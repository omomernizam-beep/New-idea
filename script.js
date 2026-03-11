// Slideshow
let slides = document.querySelectorAll(".slide");
let slideIdx = 0;
if(slides.length > 0) {
    setInterval(() => {
        slides[slideIdx].classList.remove("active");
        slideIdx = (slideIdx + 1) % slides.length;
        slides[slideIdx].classList.add("active");
    }, 4000);
}

// Check Role
window.onload = function() {
    let role = localStorage.getItem("userRole");
    
    if(role === 'investor') {
        document.getElementById("investor-view").style.display = "block";
        loadPitchesForInvestor();
    } else if (role === 'entrepreneur') {
        document.getElementById("entrepreneur-view").style.display = "block";
        populateCities();
    }
};

function populateCities() {
    const dropdown = document.getElementById("city-dropdown");
    if(dropdown && typeof cities !== 'undefined') {
        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            dropdown.appendChild(opt);
        });
    }
}

function publishPitch() {
    let idea = document.getElementById("idea-text").value;
    let citySelect = document.getElementById("city-dropdown");
    let cityName = citySelect.options[citySelect.selectedIndex].text;
    
    if(idea.length < 5) return alert("Pehle idea likhen!");

    let newPitch = { idea: idea, city: cityName, date: new Date().toLocaleString() };
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    allPitches.unshift(newPitch);
    localStorage.setItem("allPitches", JSON.stringify(allPitches));

    alert("Pitch Published! Investors can now see it.");
}

function loadPitchesForInvestor() {
    let wall = document.getElementById("pitch-wall");
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");

    if(allPitches.length === 0) {
        wall.innerHTML = "<p style='text-align:center;'>No pitches available.</p>";
        return;
    }

    wall.innerHTML = allPitches.map(p => `
        <div style="background: rgba(255,255,255,0.05); padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid #2ecc71;">
            <h4 style="color: #00d4ff; margin: 0;">Market: ${p.city}</h4>
            <p style="margin: 10px 0;">${p.idea}</p>
            <small style="color: #888;">${p.date}</small>
        </div>
    `).join("");
}