window.onload = function()
{
 var id = document.getElementById('idtxt')
id.innerHTML = "po id"
id.style.color = "yellow"

var tagname = document.getElementsByTagName('div')
tagname[0].style.background = "pink"
tagname[1].style.background = "orange"
var allquery = document.querySelectorAll('li')
var byname = document.getElementsByName('email')
var wd = innerWidth

for (let el2 of byname){
    el2.style.background= "red"
    el2.style.border = "0"
    el2.style.width = wd + "px" 
}
byname[0].style.background = "orange"


for (var el of allquery){
    el.style.color = "white"
    el.style.display = "inline-block"
    el.style.fontSize = "3rem"
    el.style.padding ="1rem"
}
}
