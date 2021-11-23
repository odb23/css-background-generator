var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var getRandomColor = ()=> "#" + Math.floor(Math.random() * 16777215).toString();

function generateColors () {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
}


function updateGradient () {
    body.style.background = "linear-gradient(to " 
                        + "right" + ", " 
                        + color1.value + ", " 
                        +color2.value + ")";

    h3.textContent = body.style.background + ";";
}


generateColors();
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);