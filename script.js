var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var checkedDirection = "right";
var copyBtn = document.querySelector(".btn");

var getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

function updateGradient() {
    body.style.background = "linear-gradient(to "
        + checkedDirection + ", "
        + color1.value + ", "
        + color2.value + ")";

    h3.textContent = body.style.background + ";";
}

var dirRadios = document.getElementsByName('direction');
for (let i = 0; i < dirRadios.length; i++) {
    dirRadios[i].onclick = function () {
        checkedDirection = dirRadios[i].value;
        updateGradient();
    }
}

function generateColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    updateGradient();
}

generateColors();
color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
copyBtn.onclick = function () {
    navigator.clipboard.writeText(h3.textContent);
};
