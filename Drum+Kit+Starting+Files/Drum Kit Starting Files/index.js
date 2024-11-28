function handleClick(event) {
    
    const buttonKey = this.innerHTML;

   
    makeSound(buttonKey);

   
    addAnimation(buttonKey);
}


document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);

    addAnimation(event.key);
});


function makeSound(key) {
    let audio;

    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "i":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            console.log("Invalid key: " + key);
            return;
    }

    audio.play();
}


function addAnimation(key) {
    const button = document.querySelector(`.${key}`);
    if (button) {
        button.classList.add("pressed");

      
        setTimeout(function () {
            button.classList.remove("pressed");
        }, 100);
    }
}


const buttons = document.querySelectorAll(".drum");
for (const button of buttons) {
    button.addEventListener("click", handleClick);
}
