import { getBreakInfo } from '../fetch-utils.js';
import { renderMenuInfo } from '../render-utils.js';

const infoDiv = document.getElementById('info');

async function displayActivity() {
    const params = new URLSearchParams(window.location.search);

    const getId = await getBreakInfo(params.get('id'));

    const activity = renderMenuInfo(getId);

    infoDiv.append(activity);
}
displayActivity();

const returnButton = document.getElementById('return-breakmenu');

returnButton.addEventListener('click', () => {
    location.replace('../break-menu');
});