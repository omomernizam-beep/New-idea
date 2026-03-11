function generate(){

let idea=document.getElementById("idea").value

if(idea.length<10){

alert("Please enter real business idea")

return

}

let output=`

<h2>Business Potential: Medium</h2>

<p>Recommended Location: High traffic markets</p>

<p>Startup Investment: 200k – 500k PKR</p>

<p>Break Even: 6 – 12 months</p>

<p>Growth Plan: Online + physical expansion</p>

`

document.getElementById("result").innerHTML=output

}