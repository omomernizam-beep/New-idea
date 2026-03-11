function generatePDF() {
    let content = document.getElementById("result").innerText;
    if(content.includes("Results will appear")) {
        alert("Pehle roadmap generate karen!"); return;
    }

    let blob = new Blob(["BIZVISION AI - STARTUP REPORT\n\n" + content], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Startup_Roadmap.txt"; // TXT is safer without external libraries, or use jsPDF
    a.click();
}