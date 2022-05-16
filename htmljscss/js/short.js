window.onload = function()
{

document.getElementsByClassName('btn')[0].addEventListener('click',genLink);
document.getElementsByClassName('btn-2')[0].addEventListener('click', clear);
}

function clear()
{
    document.getElementsByClassName('ipt')[0].value = ""
}


function genLink()
{
    let url = document.getElementsByClassName('ipt')[0].value
    fetch("https://api.shrtco.de/v2/shorten?url="+url)
    .then(response =>response.json())
    .then(data => linksRedy(data))
}

function linksRedy(data)
{
    let result = data.result
    setLink("code", result.code)
    setLink("short-link1", result.full_short_link)
    setLink("short-link2", result.full_short_link2)
    setLink("short-link3", result.full_short_link3)
}

function setLink(id , shortUrl)
{
    document.getElementsByClassName(id)[0].innerHTML = "<a href='"+ shortUrl+"'> " + shortUrl +  " </a>"
 
}
