function generate() {
    // ID check: Dashboard mein 'idea-text' hai
    let idea = document.getElementById("idea-text").value;
    let citySelect = document.getElementById("city-dropdown");
    let resultDiv = document.getElementById("result");

    if (idea.length < 10) {
        alert("Bhai, thora detail mein idea likhen (kam az kam 10 characters).");
        return;
    }

    let cityName = citySelect.options[citySelect.selectedIndex].text;
    let population = parseInt(citySelect.value).toLocaleString();

    let output = `
        <div style="background: rgba(0, 212, 255, 0.1); padding: 15px; border-radius: 10px; border: 1px solid #00d4ff; margin-top: 20px; text-align: left;">
            <h3 style="color: #00ffcc; margin-top: 0;">🚀 ProfitPulse Strategic Roadmap</h3>
            <p><b>Target Market:</b> ${cityName}</p>
            <p><b>Market Size:</b> ~${population} Potential Customers</p>
            <hr style="border: 0; border-top: 1px solid #444;">
            <p><b>Phase 1 (Month 1-2):</b> Prototype development for "${idea.substring(0, 20)}...".</p>
            <p><b>Phase 2 (Month 3-5):</b> Beta testing in ${cityName.split(',')[0]} local markets.</p>
            <p><b>Phase 3 (Month 6+):</b> Full scale marketing to reach ${population} residents.</p>
            <p style="color: #2ecc71; font-weight: bold;">Business Potential: High (Based on Market Density)</p>
        </div>
    `;

    resultDiv.innerHTML = output;
}