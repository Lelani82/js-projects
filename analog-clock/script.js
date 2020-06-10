const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// get current date & time
let date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour:" + hr + "; Min:" + min + "; Sec:" + sec);

// setup hand positions according to current time
let hrPosition = (hr*360/12)+(min*(360/60)/12);                 // hr plus minutes
let minPosition = (min*360/60)+(sec*(360/60)/60);               // min plus seconds
let secPosition = sec*360/60;                                   // seconds

function runTheClock() {
   
    // setup for hands to stop the return to zero on clock
    hrPosition = hrPosition+(3/360);                            // (360/12)*360
    minPosition = minPosition+(6/60);                           // (1/60)*6
    secPosition = secPosition+(6);                              // 360/60

    // display hands on clock
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
};

// set up to run function every second
let interval = setInterval(runTheClock, 1000);
