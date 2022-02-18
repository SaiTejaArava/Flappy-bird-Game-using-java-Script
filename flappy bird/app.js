var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0; 
var counter=0;


hole.addEventListener("animationiteration",()=>{
    var random=Math.random()*3;
    var top=(random*100)+150;
    hole.style.top=-(top)+"px";
    counter++;
});
setInterval(function(){
    var charactertop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(charactertop<480 && jumping==0){
    character.style.top=charactertop+2+"px";
    }
    var blockleft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holetop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var ctop=-(500-charactertop);
    if((charactertop>=480 ||((blockleft<20)&&(blockleft>-50)&&((ctop<holetop)||(ctop>holetop+130))))){
        if(counter==0){
            alert("Game Over-Score: 0")
        }else{
        alert("Game Over- Score: "+(--counter));
        character.style.top=150+"px";
        counter=0;
        }
    }
},10);

addEventListener("keyup",event=>{
    if(event.code==="Space"){
        jumping=1;
        var jumpcounter=0;
        var jumpinginterval=setInterval(function(){
            var charactertop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if(charactertop>0){
            character.style.top=charactertop-3+"px";
            }
            jumpcounter++;
            if(jumpcounter>20){
                clearInterval(jumpinginterval);
                jumping=0;
                jumpcounter=0;
            }
        },10);

    }
})