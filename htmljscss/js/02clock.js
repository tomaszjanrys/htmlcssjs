window.onload = function(){
    setInterval(function() {
        var time = new Date();
        var hours   =   time.getHours();
        var minuts  =   time.getMinutes();
        var seconds =   time.getSeconds()

        document.getElementsByClassName('clock')[0].innerHTML 
                = hours + ":" + minuts + ":" + seconds  ;
        
                fetch('https://api.chucknorris.io/jokes/random')
                .then(Response=>Response.json())
                .then(data=>joke(data, seconds))          
        
    },1000);

  
   
}
function joke(data, seconds){

    if((seconds==0)||(seconds==10)||(seconds==20)||(seconds==30)||(seconds==40)||(seconds==50)){
        document.getElementsByClassName('jokeChuck')[0].innerHTML = data.value
    }
}
