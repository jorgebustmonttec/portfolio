const buttonDiscord = document.getElementById("buttonDiscord");
console.log(buttonDiscord)
const buttonRoblox = document.getElementById("buttonRoblox");
const buttonFirebase = document.getElementById("buttonFirebase");
const buttonSql = document.getElementById("buttonSql");
const header = document.getElementById("header");
const monkey = document.getElementById("monkeygifeat");

const animationTime = 2000;


function reverseanimation(){

    header.classList.add("reverse");
    monkey.classList.add("reversemonkey");
}

buttonFirebase.addEventListener("click", function(){
    reverseanimation();

});

buttonDiscord.addEventListener("click", function(){
    reverseanimation();
    setTimeout(function(){
        window.location.href = "./discord.html";
    }, animationTime);
});

buttonRoblox.addEventListener("click", function(){
    reverseanimation();
    setTimeout(function(){
        window.location.href = "./roblox.html";
    }, animationTime);
});


buttonSql.addEventListener("click", function(){
    reverseanimation();
    setTimeout(function(){
        window.location.href = "./sql.html";
    }, animationTime);
});

