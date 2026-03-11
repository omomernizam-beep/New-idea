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
            <h3 style="color: #00ffcc;">1. INVESTOR PITCH</h3>
            <p>"We are solving a major gap in ${selectedCity} by launching ${idea}. With a target reach of ${Math.floor(citySelect.value * 0.05)} users in Year 1, we offer a unique opportunity for high ROI."</p>
            
            <h3 style="color: #00ffcc;">2. STRATEGIC ROADMAP</h3>
            <p><b>Phase 1:</b> Local Validation in ${selectedCity}.<br>
            <b>Phase 2:</b> Marketing scale-up based on 10% MoM growth assumption.<br>
            <b>Phase 3:</b> Series A funding for regional expansion.</p>
        </div>
    `;
    resultDiv.innerHTML = pitch;
}