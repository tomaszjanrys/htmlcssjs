window.onload = function()
{
calculator.init()
}

let calculator = 
{
    buttons: undefined,
    input: undefined,
    init: function()
            {
                this.buttons = document.querySelectorAll(".numbers button, .operators button")
                this.input = document.getElementById("input")

                for(let i=0;i<this.buttons.length;i++)
                {
                    let el = this.buttons[i]
                  
                    el.addEventListener("click", this.btnClick)
                }

                
            
            },
    btnClick: function(e)
                {
                    let divtxt = e.target.innerHTML
                    console.log("kik"+ divtxt)
                    calculator.addNumToInp(divtxt)
                },
    addNumToInp: function(str)
                    {
                        this.input.value += str
                    }
}