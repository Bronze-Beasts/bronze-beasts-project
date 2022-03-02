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
    a.href = `./break-info/?id=${object.id}`;

    optionDiv.append(h3, img, p);
    a.append(optionDiv);
    return a;
}