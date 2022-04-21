window.onload = function()
{
    alert("Strona zaladowana poprawnie");
    this.document.getElementById("intro-js").style.background="blue";
}

function test()
{
    this.document.getElementById("intro-js").style.background= "red";
    this.document.getElementById("intro").style.color="blue";
    alert("Klikles mnie ");
}