var sounds = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var m=0; m < numberOfDrumButton; m++) {

    document.querySelectorAll(".drum")[m].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnumation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function (event) {
    
    var buttonKey = event.key;
    makeSound(buttonKey);
    buttonAnumation(buttonKey);
});

function buttonAnumation(buttonPressed) {
var currentKey = document.querySelector("."+buttonPressed);
currentKey.classList.add("pressed");

setTimeout(function() {
    currentKey.classList.remove("pressed");
}, "100")
}

function handleClick(num) {
    var crash = new Audio("sounds/"+ sounds[num]);
    crash.play();
}

function makeSound(key) {
    switch (key) {
        case "w": 
            handleClick(3);
            break;
        case "a": 
            handleClick(4);
            break;
        case "s":
            handleClick(5);
            break;
        case "d": 
            handleClick(6);
            break;
        case "j": 
            handleClick(2);
            break;
        case "k": 
            handleClick(0);
            break;
        case "l": 
            handleClick(1);
            break;
        default:
            break;
    }
}