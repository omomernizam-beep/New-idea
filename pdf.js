function downloadPDF(){

const { jsPDF } = window.jspdf

let doc=new jsPDF()

doc.text("ProfitPulse Business Report",20,20)

doc.text(document.getElementById("result").innerText,20,40)

doc.save("business-report.pdf")

}