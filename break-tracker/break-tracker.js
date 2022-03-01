import { logout, checkAuth, createBreak } from '../fetch-utils.js';

checkAuth();

const newBreak = document.getElementById('new-break');

newBreak.addEventListener('click', async () => {
    const response = await createBreak();
    const params = new URLSearchParams();
    params.set('id', response.id);

    console.log(response);
    window.location.replace(`/break-menu/?${ params.toString() }`);
});

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});

const timer = document.getElementById('stopwatch');
const startTimer = document.getElementById('start-timer');
const stopTimer = document.getElementById('stop-timer');


let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

startTimer.addEventListener('click', () => {
    if (stoptime === true) {
        stoptime = false;
        timerCycle();
    }

});

stopTimer.addEventListener('click', () => {
    if (stoptime === false) {
        stoptime = true;
    }
});

function timerCycle() {
    if (stoptime === false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        
        sec = sec + 1;

        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }
        if (min === 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec === 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr === 0) {
            hr = '0' + hr;
        }
        
        timer.innerHTML = hr + ':' + min + ':' + sec;
        
        setTimeout('timerCycle()', 1000);
    }
}

// function resetTimer() {
//     timer.innerHTML = '00:00:00';
// }
