let input1 = document.getElementById("ipt1");

input1.onclick =function iptClick(event){
    console.log("klik i robisz co cchesz")
    console.log(event)
}

let body = document.getElementById("body")
var randomArray = [
    '#cc0000','#00cc00', '#0000cc','#01cd30', '#3300cc','#03cc04', '#5000cc'
 ];


body.onkeydown = function iptClick2(event){
    while(event.key == event.key){
        var randomA = randomArray[Math.floor(Math.random()*randomArray.length)] 
        document.getElementById("body").style.backgroundColor= randomA
        break
    }

}
