let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2");
let body =document.getElementById("gradient");
let h3CssContent = document.getElementById("h3");
function setGradientFunction(){
        body.style.background="linear-gradient(to right, " 
        + color1.value +"," 
        + color2.value + ")";
         h3CssContent.textContent = body.style.background + ";";
         
    
        }
    
color1.addEventListener("input", setGradientFunction)

color2.addEventListener("input", setGradientFunction)


