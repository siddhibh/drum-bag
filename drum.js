var numberofdrumbuttons =  document.querySelectorAll(".drum").length;
for (var i =0; i<numberofdrumbuttons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);
        buttonAnimation(buttoninnerhtml);
    } );
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
 function makesound(key){
    switch (key)
    {
        case "w":
            var audio1 = new Audio("sound/snare drum.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sound/dw drum.wav");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sound/hellenki.wav");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sound/congo.wav");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sound/tambourine.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sound/djembe.wav");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sound/bass drum.wav");
            audio7.play();
            break;
        default: console.log(buttoninnerhtml);
    }
 }
 

function buttonAnimation(currentkey)
{
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}