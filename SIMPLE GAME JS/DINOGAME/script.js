var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0

function jump(){
    if (character.classList !="jump") {
    character.classList.add("jump");
    setTimeout(function(){
    character.classList.remove("jump");
    },300);
}}

document.addEventListener("keydown", function (event) {
    if (event.keyCode == "32" || "33") {
      jump()  
    }
});


var checkDead = setInterval(function() {
    // get current character Y position
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    // get current character X position
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        // alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);