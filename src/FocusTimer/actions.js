import state from "./state.js";
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js'

export function play(){
    state.isRunning = true;
    document.documentElement.classList.add('running')


    timer.countdown()
}

export function stop(){
    state.isRunning = false;
    document.documentElement.classList.remove('running')
   
}

export function maisCinco(){
   
    let minutes = event.currentTarget.textContent
    let seconds = event.currentTarget.textContent
    minutes = Number(el.minutes.textContent)
    seconds = Number(el.seconds.textContent)
    
    minutes +=5

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes,seconds)

    
}

export function menosCinco(){
    

    let minutes = event.currentTarget.textContent
    let seconds = event.currentTarget.textContent
    minutes = Number(el.minutes.textContent)
    seconds = Number(el.seconds.textContent)
    
    minutes -=5

    if(minutes < 0){
        stop()
        return
    }

    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay(minutes,seconds)
}

function toggleSound(soundElement, sound) {

    sound.loop = true;



 
    sounds.floresta.pause();
    sounds.rain.pause();
    sounds.cafeteira.pause();
    sounds.lareira.pause();

   
    document.querySelectorAll("#sounds div").forEach(img => {
        img.classList.remove('selected');
    });

   
    if (sound.paused) {
        sound.play();
        soundElement.classList.add('selected');
    } else {
        sound.pause();
        soundElement.classList.remove('selected');
    }
}


function selectSound(event) {
    const soundType = event.currentTarget.getAttribute("data-som");
    
    switch (soundType) {
        case "floresta":
            toggleSound(event.currentTarget, sounds.floresta);
            break;
        case "rain":
            toggleSound(event.currentTarget, sounds.rain);
            break;
        case "cafeteira":
            toggleSound(event.currentTarget, sounds.cafeteira);
            break;
        case "lareira":
            toggleSound(event.currentTarget, sounds.lareira);
            break;
    }
}


document.querySelectorAll("#sounds div").forEach(div => {
    div.addEventListener("click", selectSound);
});
  
