// --- PUBLISH LOGIC (For Founders) ---
function publishPitch() {
    // Sahi IDs pakarna (Matching with your dashboard)
    const ideaTextarea = document.getElementById("idea-text");
    const citySelect = document.getElementById("city-dropdown");

    if (!ideaTextarea || !citySelect) {
        alert("System Error: IDs mismatch. Please check HTML.");
        return;
    }

    const idea = ideaTextarea.value.trim();
    const cityName = citySelect.options[citySelect.selectedIndex].text;
    const marketPop = citySelect.value;

    if (idea.length < 10) {
        alert("Bhai, thora detail mein idea likhen taake Investor ko samajh aaye!");
        return;
    }

    // Naya pitch object
    let newPitch = {
        idea: idea,
        city: cityName,
        market: parseInt(marketPop).toLocaleString(),
        timestamp: new Date().toLocaleString(),
        owner: "M. Omar Nizam" // Aapka naam as Founder
    };

    // Purane pitches uthana aur naya add karna
    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");
    allPitches.unshift(newPitch); // Naya idea sab se upar
    localStorage.setItem("allPitches", JSON.stringify(allPitches));

    alert("Mubarak ho! Aapki pitch Publish ho gayi hai. Investors ab ise dekh saktay hain.");
}

// --- LOAD LOGIC (For Investors) ---
function loadPitchesForInvestor() {
    const wall = document.getElementById("pitch-wall");
    if (!wall) return;

    let allPitches = JSON.parse(localStorage.getItem("allPitches") || "[]");

    if (allPitches.length === 0) {
        wall.innerHTML = "<p style='text-align:center; color:#888;'>Abhi tak koi pitches publish nahi huin.</p>";
        return;
    }

    // Pitch Wall ko update karna
    wall.innerHTML = allPitches.map(p => `
        <div style="background: rgba(255,255,255,0.05); padding: 15px; margin-bottom: 15px; border-radius: 10px; border-left: 4px solid #2ecc71; border: 1px solid rgba(255,255,255,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h4 style="color: #00d4ff; margin:0;">${p.city}</h4>
                <small style="color:#666;">${p.timestamp}</small>
            </div>
            <p style="margin: 10px 0; color:#eee; font-size:0.9rem; line-height:1.4;">${p.idea}</p>
            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #333; padding-top:10px; margin-top:5px;">
                <span style="font-size:0.75rem; color:#2ecc71;">Potential Reach: ${p.market} people</span>
                <button style="padding:4px 10px; font-size:11px; background:#2ecc71; color:white; border:none; border-radius:4px; cursor:pointer;">Interested</button>
            </div>
        </div>
    `).join("");
}