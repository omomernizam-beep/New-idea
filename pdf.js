function generatePDF() {
    let content = document.getElementById("result").innerText;
    if(content.length < 10) return alert("Generate roadmap first!");

    let blob = new Blob(["PROFITPULSE REPORT\n\n" + content], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Business_Report.txt";
    a.click();
}