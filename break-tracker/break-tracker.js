import { logout, checkAuth, createBreak } from '../fetch-utils.js';

checkAuth();

const newBreak = document.getElementById('new-break');
const errorTimer = document.getElementById('error-timer');
const breakStats = document.getElementById('breakstats-button');

const tannerError = new Audio('/assets/error.m4a');
const tannerBreak = new Audio('/assets/break.m4a');

const breakTimeMinutes = 30; 

setInterval(function() { tannerBreak.play(); }, breakTimeMinutes * 60 * 1000);

breakStats.addEventListener('click', () => {
    window.location.replace('/break-stats');
});

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

window.onload = function() {
    
    breakTimerStart();
    
};

function breakTimerStart() {
    let hr = 0;
    let min = 0;
    let sec = 0;
    
    let appendSec = document.getElementById('seconds');
    let appendMin = document.getElementById('minutes');
    let appendHr = document.getElementById('hours');
    
    setInterval(updateTimer, 1000);

    function updateTimer() {
        sec++;
        if (sec <= 9){
            appendSec.innerHTML = '0' + sec;
        }

        if (sec > 9){
            appendSec.innerHTML = sec;
        }

        if (sec > 59){
            min++;
            appendMin.innerHTML = '0' + min;
            sec = 0;
            appendSec.innerHTML = '0' + 0;
        }

        if (min <= 9){
            appendMin.innerHTML = '0' + min;
        }

        if (min > 9){
            appendMin.innerHTML = min;
        }

        if (min > 59){
            hr++;
            appendHr.innerHTML = '0' + hr;
            min = 0;
            appendMin.innerHTML = '0' + 0;
        }

        if (hr <= 9){
            appendHr.innerHTML = '0' + hr;
        }

        if (hr > 9){
            appendHr.innerHTML = hr;
        }

    }
}

let errorButton = document.getElementById('new-error');

errorButton.addEventListener('click', ()=> {
    errorButton.disabled = true;
    errorTimer.classList.remove('hidden');
    errorTimerStart();
    
});

function errorTimerStart() {

    let min = 0;
    let sec = 10;

    let appendErrorMin = document.getElementById('errorMinutes');
    let appendErrorSec = document.getElementById('errorSeconds');
    let interval;

    clearInterval(interval);
    interval = setInterval(updateTimer, 1000);

    function updateTimer() {
        sec--;
        if (sec < 0){
            sec = 59;
            min--;
            // appendErrorSec.innerHTML = sec;
            appendErrorMin.innerHTML = min;
        }
        if (sec >= 10){
            appendErrorSec.innerHTML = sec;
        }
        if (sec <= 9){
            appendErrorSec.innerHTML = '0' + sec;
        }
        if (min <= 9) {
            appendErrorMin.innerHTML = '0' + min;
        }
        if ((sec === 0) && (min === 0)) {
            clearInterval(interval);
            errorButton.disabled = false;
            tannerError.play();
        }
    }

}
