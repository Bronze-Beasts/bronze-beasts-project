import { logout, getTodaysBreaks } from '../fetch-utils.js';
const logoutButton = document.getElementById('logout');
const breakTrackerButton = document.getElementById('breaktracker-button');
const totalNumBreaks = document.getElementById('total-num-breaks');
const totalBreakTime = document.getElementById('total-break-time');

breakTrackerButton.addEventListener('click', () => {
    window.location.replace('/break-tracker');
});

logoutButton.addEventListener('click', async () => {
    await logout();
});

window.addEventListener('load', async () => {
    const date = new Date();

    console.log(date);
    
    const breaks = await getTodaysBreaks();
    totalNumBreaks.textContent = `${breaks.data.length}`;
  
    let totalTime = 0; 

    for (let kitkat of breaks.data){
        const startTime = new Date(kitkat.start_time).getTime();
        const endTime = new Date(kitkat.end_time).getTime();
        console.log(endTime - startTime);

        totalTime += (((endTime - startTime) / 1000) / 60);
    
    }
    totalBreakTime.textContent = `${ Math.ceil(totalTime) }`;
});
