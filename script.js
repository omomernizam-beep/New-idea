function generate(){

let idea=document.getElementById("idea").value
let city=document.getElementById("city").value

if(idea.length<10){
alert("Please enter real business idea")
return
}

let valuation=Math.floor(Math.random()*2000000)+1000000
let investment=Math.floor(Math.random()*400000)+200000

let result=`

<h2>AI Business Roadmap</h2>

<p><b>Potential:</b> Medium</p>

<p><b>Best Locations:</b> ${city} commercial markets</p>

<p><b>Startup Investment:</b> ${investment} PKR</p>

<p><b>Break Even:</b> 6 – 12 months</p>

<p><b>Startup Valuation:</b> ${valuation} PKR</p>

<p><b>5 Year Forecast:</b> Expansion → Brand Growth</p>

<p><b>AI Advisor:</b> Focus on strong marketing and location.</p>

<a href="investors.html">Find Investors</a>

<a href="report.html">Download Business Report</a>

`

document.getElementById("result").innerHTML=result

}