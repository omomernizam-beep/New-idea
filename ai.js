function generate() {
    let idea = document.getElementById("idea-input").value;
    let resultDiv = document.getElementById("result");

    if (idea.length < 10) {
        alert("Bhai, idea toh likho!"); return;
    }

    let roadmap = `
        <div id="roadmap-content">
            <h2 style="color: #00d4ff;">Strategic Roadmap (Assumptions)</h2>
            <ul style="text-align: left; line-height: 1.8;">
                <li><b>Month 1-2 (MVP):</b> Build core features and test with 100 users.</li>
                <li><b>Month 3-6 (Market Fit):</b> Launch in selected city. Assumption: 5% conversion rate.</li>
                <li><b>Month 7-12 (Scaling):</b> Seek $50k seed funding for expansion.</li>
                <li><b>Break-even:</b> Estimated at 14 months based on current market trends.</li>
            </ul>
        </div>
    `;
    resultDiv.innerHTML = roadmap;
}