function generate() {
    let idea = document.getElementById("idea-input").value;
    let citySelect = document.getElementById("city");
    let selectedCity = citySelect.options[citySelect.selectedIndex].text;
    let resultDiv = document.getElementById("result");

    if (idea.length < 10) {
        alert("Bhai, idea toh likho!"); return;
    }

    let pitch = `
        <div id="final-report" style="text-align: left; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 10px;">
            <h3 style="color: #00ffcc;">1. INVfunction generate() {
    let idea = document.getElementById("idea-text").value;
    let citySelect = document.getElementById("city-dropdown");
    let cityName = citySelect.options[citySelect.selectedIndex].text;
    let resultDiv = document.getElementById("result");

    if (idea.length < 5) return alert("Enter an idea first!");

    resultDiv.innerHTML = `
        <div style="background: rgba(0,212,255,0.1); padding: 15px; border-radius: 8px; border: 1px solid #00d4ff;">
            <h3 style="color: #00ffcc;">Strategic Pitch</h3>
            <p>"We are launching <b>${idea}</b> in <b>${cityName}</b>. With a market of ${parseInt(citySelect.value).toLocaleString()} people, we target 10% market share."</p>
            <p><b>Roadmap:</b> Build MVP -> Local Test in ${cityName} -> Scale.</p>
        </div>
    `;
}STOR PITCH</h3>
            <p>"We are solving a major gap in ${selectedCity} by launching ${idea}. With a target reach of ${Math.floor(citySelect.value * 0.05)} users in Year 1, we offer a unique opportunity for high ROI."</p>
            
            <h3 style="color: #00ffcc;">2. STRATEGIC ROADMAP</h3>
            <p><b>Phase 1:</b> Local Validation in ${selectedCity}.<br>
            <b>Phase 2:</b> Marketing scale-up based on 10% MoM growth assumption.<br>
            <b>Phase 3:</b> Series A funding for regional expansion.</p>
        </div>
    `;
    resultDiv.innerHTML = pitch;
}