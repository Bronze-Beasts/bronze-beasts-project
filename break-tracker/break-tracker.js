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
