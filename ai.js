function generate() {
    // Dashboard mein textarea ki ID 'idea-text' honi chahiye
    let ideaElement = document.getElementById("idea-text");
    let citySelect = document.getElementById("city-dropdown");
    let resultDiv = document.getElementById("result");

    // Check agar elements mil rahe hain ya nahi
    if (!ideaElement || !citySelect || !resultDiv) {
        console.error("IDs match nahi ho rahi hain. Please check HTML IDs.");
        return;
    }

    let idea = ideaElement.value;

    if (idea.length < 10) {
        alert("Bhai, thora detail mein idea likhen (kam az kam 10 characters).");
        return;
    }

    // Dropdown se data nikalna
    let selectedOption = citySelect.options[citySelect.selectedIndex];
    let cityName = selectedOption.text;
    let population = parseInt(selectedOption.value) || 1000000; // Default agar value na mile

    let output = `
        <div style="background: rgba(0, 212, 255, 0.1); padding: 20px; border-radius: 10px; border: 1px solid #00d4ff; margin-top: 20px; text-align: left; color: white;">
            <h3 style="color: #00ffcc; margin-top: 0;">🚀 ProfitPulse Strategic Roadmap</h3>
            <p><b>Target Market:</b> ${cityName}</p>
            <p><b>Market Potential:</b> ~${population.toLocaleString()} People</p>
            <hr style="border: 0; border-top: 1px solid #444;">
            
            <p><b>Phase 1 (Month 1-2):</b> Launching MVP for "${idea.substring(0, 30)}..." in ${cityName.split(',')[0]}.</p>
            <p><b>Phase 2 (Month 3-6):</b> Local marketing drive to capture 5% of the ${cityName.split(',')[0]} market.</p>
            <p><b>Phase 3 (Month 7-12):</b> Scaling operations and seeking investors based on traction.</p>
            
            <div style="background: rgba(46, 204, 113, 0.2); padding: 10px; border-radius: 5px; border: 1px solid #2ecc71; margin-top: 10px;">
                <b style="color: #2ecc71;">AI Insight:</b> Ye idea ${cityName.split(',')[0]} ki high density population ke liye perfect hai.
            </div>
        </div>
    `;

    resultDiv.innerHTML = output;
}