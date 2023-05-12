const header = document.getElementById("header");
const monkey = document.getElementById("monkeygifeat");
const returnButton = document.getElementById("linkRegresar");

const animationTime = 1000;

function reverseanimation(){

    header.classList.add("reverse");
    monkey.classList.add("reversemonkey");
}

returnButton.addEventListener("click", function(){
    reverseanimation();
    setTimeout(function(){
        window.location.href = "./index.html";
    }
    , animationTime);
});