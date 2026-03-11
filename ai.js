function generate() {
    let idea = document.getElementById("idea").value;
    let result = document.getElementById("result");

    if (idea.length < 15) {
        alert("Bhai, thora detail mein idea likho!");
        return;
    }

    let category = "General";
    if (idea.toLowerCase().includes("tech") || idea.toLowerCase().includes("app")) category = "High-Tech";
    if (idea.toLowerCase().includes("food")) category = "Retail/F&B";

    let output = `
        <h3>AI Advisor Report</h3>
        <p><b>Category:</b> ${category}</p>
        <p><b>Risk Level:</b> ${category === "High-Tech" ? "Medium" : "Low"}</p>
        <p><b>Strategy:</b> Focus on ${category === "High-Tech" ? "Scalability" : "Local Quality"}.</p>
        <p><b>Investment:</b> 500k - 2M PKR</p>
    `;
    result.innerHTML = output;
}