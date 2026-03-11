function generatePDF() {
    let roadmapContent = document.getElementById("result").innerText;
    
    if(roadmapContent.includes("Results will appear")) {
        alert("Pehle Roadmap generate karen!"); return;
    }

    let report = `
    PROFITPULSE BUSINESS REPORT
    ---------------------------
    Date: ${new Date().toLocaleDateString()}
    
    ${roadmapContent}
    
    Disclaimer: This roadmap is based on AI assumptions and market data.
    `;

    let blob = new Blob([report], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ProfitPulse_Roadmap.txt";
    link.click();
}