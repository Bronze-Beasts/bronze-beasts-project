import { logout, checkAuth } from '../fetch-utils.js';

checkAuth();

const newBreak = document.getElementById('new-break');

newBreak.addEventListener('click', () => {
    window.location.replace('/break-menu');
});

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
});
