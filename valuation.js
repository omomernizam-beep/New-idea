function calculateValuation() {
    let cityPop = document.getElementById("city-select").value;
    
    if (!cityPop) {
        alert("Pehle city select karen!");
        return;
    }

    // Smart logic: Population + Random variation
    let baseVal = parseInt(cityPop) * 0.5;
    let finalVal = Math.floor(baseVal + (Math.random() * 500000));

    document.getElementById("result").innerHTML = `
        <div style="color: #00ffcc;">
            <h3>Market Valuation</h3>
            <p>Estimated Value: $${finalVal.toLocaleString()}</p>
            <p>Market Potential: Based on ${parseInt(cityPop).toLocaleString()} residents.</p>
        </div>
    `;
}