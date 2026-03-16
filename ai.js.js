function generate() {
    const idea = document.getElementById("idea-text").value.trim();
    const citySelect = document.getElementById("city-dropdown");
    const result = document.getElementById("result");

    if (idea.length < 5) {
        alert("Please enter a valid idea!");
        return;
    }

    const cityName = citySelect.options[citySelect.selectedIndex]?.text || "Local Market";
    const population = parseInt(citySelect.value) || 1000000;

    result.innerHTML = `
        <div style="background:rgba(0,123,255,0.1); padding:15px; border-radius:10px; border:1px solid #007bff; margin-top:15px; text-align:left;">
            <h4 style="color:#00ffcc; margin:0 0 10px 0;">Strategic Roadmap for ${cityName.split(',')[0]}</h4>
            <p style="font-size:13px; color:#ccc; margin-bottom:10px;">Targeting a market of ${population.toLocaleString()} residents.</p>
            <div style="border-left:2px solid #007bff; padding-left:10px; font-size:14px;">
                <p>📍 <b>Phase 1:</b> Localized launch for "${idea.substring(0, 20)}...".</p>
                <p>📍 <b>Phase 2:</b> Scale marketing to 10% of ${cityName}.</p>
                <p>📍 <b>Phase 3:</b> Investor pitch based on traction.</p>
            </div>
        </div>
    `;
}