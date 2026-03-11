function generatePDF() {
    let content = document.getElementById("result").innerText;
    if(content.includes("Results will appear")) {
        alert("Pehle roadmap generate karen!"); return;
    }

    let finalReport = `PROFITPULSE - OFFICIAL BUSINESS CASE\n\n${content}\n\nGenerated for: M. Omar Nizam\nAssumptions: Market data 2026`;
    
    let blob = new Blob([finalReport], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ProfitPulse_Investor_Pitch.txt";
    a.click();
}