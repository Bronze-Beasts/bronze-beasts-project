import { updateEndTimer, logout, checkAuth, getBreakOptions } from '../fetch-utils.js';
import { renderMenu } from '../render-utils.js';
checkAuth();

const params = new URLSearchParams(window.location.search);

const endTimer = document.getElementById('endbreak-button');

endTimer.addEventListener('click', async () => {
    await updateEndTimer(params.get('id'));
    location.replace('/break-tracker');
}); 

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});

const menuEl = document.getElementById('menu');

async function displayMenu() {
    const options = await getBreakOptions();
    
    for (let option of options) {
        const li = renderMenu(option);
        menuEl.append(li);
    }
}

displayMenu();