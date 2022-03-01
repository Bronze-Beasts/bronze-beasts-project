import { updateEndTimer, logout, checkAuth } from '../fetch-utils.js';

checkAuth();

const params = new URLSearchParams(window.location.search);

const endTimer = document.getElementById('endbreak-button');

endTimer.addEventListener('click', async () => {
    await updateEndTimer(params.get('id'));
}); 

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});
