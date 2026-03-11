function generate() {
    let idea = document.getElementById("idea-input").value;
    let cityElement = document.getElementById("city-select");
    let cityName = cityElement.options[cityElement.selectedIndex].text;
    let resultDiv = document.getElementById("result");

    if (idea.length < 10) {
        alert("Bhai, thora detail mein idea likhen!"); return;
    }

    let output = `
        <div id="roadmap-box" style="text-align: left; background: rgba(0,212,255,0.05); padding: 20px; border-radius: 12px; border-left: 4px solid #00ffcc;">
            <h3 style="color: #00ffcc; margin-top:0;">ProfitPulse Strategic Roadmap</h3>
            <p><b>Target Location:</b> ${cityName}</p>
            <p><b>Assumptions:</b> Based on 15% annual market growth and $40k initial operational cost.</p>
            
            <div style="margin-left: 15px;">
                <p><b>Phase 1 (Months 1-3):</b> Finalize MVP for ${cityName} market. Secure local vendor partnerships.</p>
                <p><b>Phase 2 (Months 4-8):</b> User Acquisition Phase. Goal: 1,000 active monthly users with 4% conversion.</p>
                <p><b>Phase 3 (Months 9-12):</b> Scaling to neighboring districts. Series A preparation.</p>
            </div>
            
            <p style="color: #ffcc00; font-size: 0.9rem;"><i>*ProfitPulse Prediction: Break-even expected by Month 14.</i></p>
        </div>
    `;
    resultDiv.innerHTML = output;
}