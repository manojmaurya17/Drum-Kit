var numberOfDrumButtons = document.querySelectorAll(".drum").length;

sound = ["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"];


var sound = {
    "w":"sounds/tom-1.mp3",
    "a": "sounds/tom-2.mp3",
    "s": "sounds/tom-3.mp3",
    "d": "sounds/tom-4.mp3",
    "j": "sounds/snare.mp3",
    "k": "sounds/crash.mp3",
    "l": "sounds/kick-bass.mp3"
};

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var str = this.textContent;
        var audio = new Audio(sound[str.toString()]);
        audio.play();
        buttonAnimation(str);
    });
}

document.addEventListener("keydown",function (){
    var str = event.key;
        var audio = new Audio(sound[str.toString()]);
        console.log(sound[str.toString()]+this.textContent);
        audio.play();
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    console.log("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}