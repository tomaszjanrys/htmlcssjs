window.onload= function()
               {
                   fetch('https://api.chucknorris.io/jokes/random')
                   .then(Response => Response.json())//parsowanie do jsona 
                   //.then(data => console.log(data))//
                   .then(data=> dataRedy(data))
               }
function dataRedy(data)
        {
            console.log("dane z serevera"+data.value)
            console.log("ID"+ data.url)
           
            document.getElementById('jokeV').innerHTML = data.value
            document.getElementsByClassName('id')[0].innerHTML=data.id
        
        }
for(let i = 0; i<10;i++)
{
    let x = 1 + i
    document.getElementsByClassName('test')[0].innerHTML = x

}