window.onload = function ()
{
    document.getElementsByClassName('calculate')[0].addEventListener('click', calc)
}

function calc(){
    let c    =     Number(document.getElementById('capital')   .value)
    let yers =     Number(document.getElementById('num-yers')  .value)
    let rate =     Number(document.getElementById('int-rate')  .value / 100)
    let n    =     Number(12);



    let resultFinal = c * Math.pow((1+ (rate/n)),(n*yers))

    document.getElementById('result').value = resultFinal.toFixed(3)
    alert(typeof(c))
}