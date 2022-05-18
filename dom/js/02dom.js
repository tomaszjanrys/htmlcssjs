window.onload = function()
{

    var div = document.getElementsByTagName('div')


    Array.from(div).forEach(el=>
        console.log(el),
        console.log(div.length)
        )

var spanek = document.createElement('span')
spanek.innerHTML = "jakis tekst <b> Hello</b>"
document.getElementsByClassName('test')[0].appendChild(spanek)

var containerdiv = document.getElementsByClassName("container")[0]

containerdiv.appendChild(document.createElement("div"))
containerdiv.lastChild.id="newDiv"
containerdiv.textContent= "Nowy div"

var clone = containerdiv.cloneNode(true)
clone.id ="newClone"
document.getElementsByTagName("body")[0].appendChild(clone)
console.log("test:",containerdiv.lastChild)
}