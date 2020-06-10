// function to play sound & change styling
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  // find corresponding keycode to play audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    // find corresponding keycode to apply 'playing' styling
    
    if(!audio) return;              // stop the function from running if no key is found
    audio.currentTime = 0;          // rewind to the start of the sound
    audio.play();
    key.classList.add('playing');   // apply styling
}

// create function to remove styling afterwards
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;     //skip if its not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// add event listener
window.addEventListener('keydown', playSound);


