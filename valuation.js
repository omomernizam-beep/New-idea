function calculateValuation() {
    let pop = parseInt(document.getElementById("city").value);
    let idea = document.getElementById("idea") ? document.getElementById("idea").value.length : 10;
    
    // Logic: Higher population + detail = Higher Valuation
    let base = pop / 100;
    let multiplier = idea > 50 ? 1.5 : 1.0;
    let finalValue = Math.floor((base * multiplier) + (Math.random() * 50000));

    document.getElementById("result").innerHTML = `
        <h3 style="color: #4db8ff;">Startup Analysis</h3>
        <p><b>Market Size:</b> ${(pop/1000000).toFixed(1)}M People</p>
        <p><b>Estimated Valuation:</b> $${finalValue.toLocaleString()}</p>
        <p><i>Note: Based on regional market density.</i></p>
    `;
}