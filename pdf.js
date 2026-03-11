function generatePDF(){

let text=document.getElementById("result").innerText

let blob=new Blob([text],{type:"application/pdf"})

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="startup-report.pdf"

a.click()

}