function findInvestor(){

let investors=[

"Sequoia Capital",
"Y Combinator",
"SoftBank",
"Angel Investor Network"

]

let r=Math.floor(Math.random()*investors.length)

document.getElementById("result").innerHTML=

"Recommended Investor: "+investors[r]

}