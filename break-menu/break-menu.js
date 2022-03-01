import { createBreak, updateEndTimer, logout, checkAuth } from '../fetch-utils.js';

checkAuth();

window.addEventListener('load', async () => {
    await createBreak();
});

const endTimer = document.getElementById('endbreak-button');

endTimer.addEventListener('click', async () => {
    await updateEndTimer(2);
}); 

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});
