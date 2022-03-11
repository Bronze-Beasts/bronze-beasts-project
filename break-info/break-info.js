import { checkAuth, getBreakInfo } from '../fetch-utils.js';
import { renderMenuInfo } from '../render-utils.js';

checkAuth();

const infoDiv = document.getElementById('info');

async function displayActivity() {
    const params = new URLSearchParams(window.location.search);

    const activityInfo = await getBreakInfo(params.get('id'));

    const activityElem = renderMenuInfo(activityInfo);

    infoDiv.append(activityElem);
}
displayActivity();

const returnButton = document.getElementById('return-breakmenu');

returnButton.addEventListener('click', () => {
    history.back();
});
