// display current time
function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    document.querySelector('#hour').innerHTML = hours;
    document.querySelector('#minute').innerHTML = ": " + mins;
    document.querySelector('#second').innerHTML = ": " + secs;
}

setInterval(clock, 100);

// display day of the week
const fullDate = new Date();
let day = fullDate.getDay();

if (day == 0) {
    document.querySelector('#sunday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 1) {
    document.querySelector('#monday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 2) {
    document.querySelector('#tuesday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 3) {
    document.querySelector('#wednesday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 4) {
    document.querySelector('#thursday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 5) {
    document.querySelector('#friday').style.color = 'rgba(0, 255, 255, 0.719)';
} else if (day == 6) {
    document.querySelector('#saturday').style.color = 'rgba(0, 255, 255, 0.719)';
};
