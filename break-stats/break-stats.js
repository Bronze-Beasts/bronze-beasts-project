import { logout, getTodaysBreaks } from '../fetch-utils.js';
const logoutButton = document.getElementById('logout');
const breakTrackerButton = document.getElementById('breaktracker-button');

breakTrackerButton.addEventListener('click', () => {
    window.location.replace('/break-tracker');
});

logoutButton.addEventListener('click', async () => {
    await logout();
});



window.addEventListener('load', async () => {
    const date = new Date();

    console.log(date);
    
    const breaks = await getTodaysBreaks(date);
    // console.log('type of breaks.data:', typeof(breaks.data));
    console.log('breaks.data:', breaks.data);

    console.log('breaks.data[0]', breaks.data[0]);

    const firstBreak = breaks.data[0];
    console.log('firstBreak date', firstBreak.date);

    
    
});


