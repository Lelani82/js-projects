window.addEventListener('keydown', function(e) {
    // find corresponding keycode on event listener
    console.log(e.keyCode);
    // find corresponding keycode to play audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    // find corresponding keycode to apply 'playing' styling
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    
    // stop the function from running if no key is found
    if(!audio) return;   

    // play audio   
    audio.currentTime = 0;  // rewind to the start of the sound
    audio.play();

    // apply styling
    key.classList.add('playing');

    // create function to remove styling afterwards
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; 
    }
});

