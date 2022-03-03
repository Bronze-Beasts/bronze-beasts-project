export function renderAdvice(advice) {
    const adviceDiv = document.createElement('div');
    adviceDiv.classList.add('advice');

    const p = document.createElement('p');
    p.classList.add('desc');

    p.innerHTML = `${ advice.quote } <br>- ${ advice.name }`;

    adviceDiv.append(p);
    return adviceDiv;
}

export function renderMenu(object){
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('break-option');

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = object.title;

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = object.img;

    const p = document.createElement('p');
    p.classList.add('duration');
    p.textContent = `Duration: ${object.duration} min`;

    const a = document.createElement('a');
    a.href = `/break-info/?id=${object.id}`;

    optionDiv.append(h3, img, p);
    a.append(optionDiv);
    return a;
}

export function renderMenuInfo(info) {
    const activitiesDiv = document.createElement('div');
    activitiesDiv.classList.add('activities-div');
    
    const h1 = document.createElement('h1');
    h1.classList.add('activity-title');
    h1.textContent = info.title;

    const video = document.createElement('iframe');
    video.classList.add('activity-video');
    video.src = info.source;

    const descriptionP = document.createElement('p');
    descriptionP.classList.add('activity-description');
    descriptionP.textContent = info.description;

    activitiesDiv.append(h1, video, descriptionP);
    return activitiesDiv;

}