function generate() {
    console.log("Roadmap function triggered!"); // Debugging ke liye

    // Sahi IDs ko pakarna
    const ideaTextarea = document.getElementById("idea-text");
    const citySelect = document.getElementById("city-dropdown");
    const resultDiv = document.getElementById("result");

    // Check karein ke elements mil rahay hain ya nahi
    if (!ideaTextarea) {
        alert("Error: 'idea-text' ID nahi mili. Dashboard HTML check karein.");
        return;
    }
    if (!resultDiv) {
        alert("Error: 'result' ID nahi mili. Dashboard HTML check karein.");
        return;
    }

    let idea = ideaTextarea.value.trim();

    if (idea.length < 5) {
        alert("Bhai, thora sa idea toh likhen!");
        return;
    }

    // Dropdown se data lena
    let cityName = "Selected Market";
    let popNum = 1000000;
    
    if (citySelect && citySelect.selectedIndex !== -1) {
        cityName = citySelect.options[citySelect.selectedIndex].text;
        popNum = parseInt(citySelect.value) || 1000000;
    }

    // Roadmap Content
    let roadmapHTML = `
        <div style="background: rgba(0, 212, 255, 0.1); padding: 20px; border-radius: 12px; border: 1px solid #00d4ff; color: white; margin-top: 20px;">
            <h3 style="color: #00ffcc; margin-top: 0;">🚀 ProfitPulse AI Roadmap</h3>
            <p><b>Market:</b> ${cityName}</p>
            <p><b>Analysis:</b> ${idea.substring(0, 50)}...</p>
            <hr style="border: 0; border-top: 1px solid #444;">
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 10px;">📅 <b>Month 1-2:</b> Setup MVP and core features.</li>
                <li style="margin-bottom: 10px;">📈 <b>Month 3-6:</b> Launch in ${cityName.split('(')[0]} with targeted ads.</li>
                <li style="margin-bottom: 10px;">💰 <b>Month 12:</b> Expected growth to scale regionally.</li>
            </ul>
            <p style="color: #2ecc71;"><b>AI Assumption:</b> High probability of success in ${cityName}.</p>
        </div>
    `;

    resultDiv.innerHTML = roadmapHTML;
}