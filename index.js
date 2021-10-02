var btns = document.querySelectorAll(".drum");

const sounds = {
    "w": "tom-3",
    "a": "kick-bass",
    "s": "snare",
    "d": "tom-1",
    "j": "tom-2",
    "k": "crash",
    "l": "tom-4"
};

// button click events
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var btn_class = this.getAttribute("class")[0];
        var sound_name = sounds[btn_class];
        playSound(sound_name);
        buttonAnimation(this.innerHTML);
    });
}

// keypress events
document.addEventListener('keypress', (e) => {
    var sound_name = sounds[e.key];
    playSound(sound_name);
    buttonAnimation(e.key);
});

function playSound(sound_name) {
    var audio = new Audio("sounds/" + sound_name + ".mp3");
    audio.play();
}

function buttonAnimation(btn_name) {
    var active_btn = document.querySelector("." + btn_name);
    active_btn.classList.add("pressed");

    setTimeout(function () {
        active_btn.classList.remove("pressed");
    }, 100)
}