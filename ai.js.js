function generate() {
    console.log("Button clicked, generating roadmap...");

    // Sahi IDs pakarna
    const ideaBox = document.getElementById("idea-text");
    const citySelect = document.getElementById("city-dropdown");
    const resultDiv = document.getElementById("result");

    // Debugging check
    if (!ideaBox || !resultDiv) {
        console.error("IDs nahi mili! HTML mein 'idea-text' aur 'result' check karen.");
        alert("System Error: IDs mismatch. Check Console (F12).");
        return;
    }

    const idea = ideaBox.value.trim();
    if (idea.length < 5) {
        alert("Bhai, thora sa idea toh likhen!");
        return;
    }

    const cityName = citySelect.options[citySelect.selectedIndex]?.text || "Target Market";
    const marketReach = parseInt(citySelect.value).toLocaleString() || "0";

    // Roadmap Design
    const roadmapHTML = `
        <div style="background: rgba(0, 212, 255, 0.15); padding: 20px; border-radius: 12px; border: 1px solid #00d4ff; color: white; margin-top: 20px; text-align: left;">
            <h3 style="color: #00ffcc; margin-top: 0; border-bottom: 1px solid #00d4ff; padding-bottom: 5px;">🚀 ProfitPulse Roadmap: ${cityName}</h3>
            <p style="font-size: 0.9rem; color: #ccc;"><b>Pitch Idea:</b> ${idea}</p>
            
            <div style="margin-top: 15px;">
                <p>📅 <b>Month 1-3 (Foundations):</b> MVP development focusing on ${cityName} users. Assumption: Market reach of ${marketReach} people.</p>
                <p>📈 <b>Month 4-8 (Growth):</b> Beta testing & local marketing campaigns. Goal: 5% conversion rate.</p>
                <p>💰 <b>Month 9-14 (Scaling):</b> Profitability phase and Series A investor pitching.</p>
            </div>
            
            <div style="background: rgba(46, 204, 113, 0.2); padding: 10px; border-radius: 5px; margin-top: 10px; border: 1px solid #2ecc71;">
                <small><b>AI Prediction:</b> Location-based success probability is 85%.</small>
            </div>
        </div>
    `;

    resultDiv.innerHTML = roadmapHTML;
    console.log("Roadmap generated successfully!");
}